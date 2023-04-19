import { TestBed } from '@angular/core/testing';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of } from 'rxjs';
import { HasTokenUserUseCase } from './get-member-token.use.case';
import { tokenUser } from '../../interfaces/data-token-member.interface';

describe('HasTokenUserUseCase', () => {
  let useCase: HasTokenUserUseCase;
  let helper: jasmine.SpyObj<JwtHelperService>;

  beforeEach(() => {
    helper = jasmine.createSpyObj('JwtHelperService', ['decodeToken']);
    TestBed.configureTestingModule({
      providers: [
        HasTokenUserUseCase,
        { provide: JwtHelperService, useValue: helper },
      ],
    });
    useCase = TestBed.inject(HasTokenUserUseCase);
  });

  it('should be created', () => {
    expect(useCase).toBeTruthy();
  });

  describe('execute', () => {
    it('should return tokenUser when token is present', () => {
      const mockToken = 'abc.123.def';
      const mockTokenUser: tokenUser = {
            email : "string@gmail.com",
        password: "string",
        iat:"123"
      };
      helper.decodeToken.and.returnValue(mockTokenUser);
      localStorage.setItem('token', mockToken);

      useCase.execute().subscribe((result) => {
        expect(result).toEqual(mockTokenUser);
      });

      expect(helper.decodeToken).toHaveBeenCalled();
    });

    it('should return undefined when token is not present', () => {
      localStorage.removeItem('token');

      useCase.execute().subscribe((result) => {
        expect(result).toBeUndefined();
      });

      expect(helper.decodeToken).not.toHaveBeenCalled();
    });
  });
});





