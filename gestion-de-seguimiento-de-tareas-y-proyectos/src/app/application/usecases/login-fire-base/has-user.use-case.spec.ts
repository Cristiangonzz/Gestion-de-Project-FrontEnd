

import { HasUserUseCase } from './has-user.use-case';

describe('HasUserUseCase', () => {
  let useCase: HasUserUseCase;

  beforeEach(() => {
    useCase = new HasUserUseCase();
  });

  it('should create the use case', () => {
    expect(useCase).toBeTruthy();
  });

  describe('execute', () => {
    it('should return true when there is a token in localStorage', () => {
      spyOn(localStorage, 'getItem').and.returnValue('dummy_token');
      useCase.execute().subscribe(result => {
        expect(result).toBeTrue();
        expect(useCase.statusEmmit).toBeTrue();
        expect(useCase.statusEmmit.value).toBeTrue();
      });
    });

    it('should return false when there is no token in localStorage', () => {
      spyOn(localStorage, 'getItem').and.returnValue(null);
      useCase.execute().subscribe(result => {
        expect(result).toBeFalse();
        expect(useCase.statusEmmit).toBeFalse();
        expect(useCase.statusEmmit.value).toBeFalse();
      });
    });
  });
});