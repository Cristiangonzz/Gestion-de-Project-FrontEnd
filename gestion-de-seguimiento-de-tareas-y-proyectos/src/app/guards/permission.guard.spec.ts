  import { TestBed } from '@angular/core/testing';

  import { Router } from '@angular/router';
  import { of } from 'rxjs';

  import { PermissionGuard } from './permission.guard';
  import { HasUserUseCase } from '../application/usecases/login-fire-base/has-user.use-case';
  import { useCaseProviders } from '../data/factory';
 import { RouterTestingModule } from '@angular/router/testing';

  describe('PermissionGuard', () => {
    let guard: PermissionGuard;
    let router: Router;
    let hasUserUseCase: jasmine.SpyObj<HasUserUseCase>;


    beforeEach(() => {
      hasUserUseCase = jasmine.createSpyObj('HasUserUseCase', ['execute']);

      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [
          PermissionGuard,
          { provide: HasUserUseCase, useValue: hasUserUseCase },
           useCaseProviders.hasUserUseCaseProvider,
        ],

      });
      guard = TestBed.inject(PermissionGuard);
      router = TestBed.inject(Router);
    });

    it('should be created', () => {
      expect(guard).toBeTruthy();
    });

     it('should return true when user is authenticated', () => {
       hasUserUseCase.execute.and.returnValue(of(true));

       guard.canActivate().subscribe((result) => {
         expect(result).toBeTrue();
         expect(hasUserUseCase.execute).toHaveBeenCalled();
       });
     });

      it('should navigate to login page and return false when user is not authenticated', () => {
        hasUserUseCase.execute.and.returnValue(of(true));
        spyOn(router, 'navigate');

        guard.canActivate().subscribe((result) => {
          expect(result).toBeFalse();
          expect(hasUserUseCase.execute).toHaveBeenCalled();
          expect(router.navigate).toHaveBeenCalledWith([`login/sign-in`]);
        });
      });
  });