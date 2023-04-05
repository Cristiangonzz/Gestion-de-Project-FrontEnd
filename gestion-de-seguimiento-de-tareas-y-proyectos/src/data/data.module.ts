import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from 'src/domain/services/member/member.service';
import { SingInMemberUseCase } from 'src/application/usecases/member/sing-in-member.usecase';
import { RegisterMemberUseCase } from 'src/application/usecases/member/register-member.usecase';
import { GetMemberUseCase } from 'src/application/usecases/member/get-member.usecase';
import { MemberImplementationRepository } from './repositories/member/member-implementation.repository';


const SignInMemberUseCaseFactory = (memberService: MemberService) => new SingInMemberUseCase(memberService);
export const signInMemberUseCaseProvider = {
    provide: SingInMemberUseCase,
    useFactory: SignInMemberUseCaseFactory,
    deps: [MemberService],
};

const RegisterMemberUseCaseFactory = 
(memberService: MemberService) => new RegisterMemberUseCase(memberService);
export const registerMemberUseCaseProvider = {
    provide: RegisterMemberUseCase,
    useFactory: RegisterMemberUseCaseFactory,
    deps: [MemberService],
};

const GetMemberUseCaseFactory = 
(memberService: MemberService) => new GetMemberUseCase(memberService);
export const getMemberUseCaseProvider = {
    provide: GetMemberUseCase,
    useFactory: GetMemberUseCaseFactory,
    deps: [MemberService],
};

@NgModule({
    providers: [
        signInMemberUseCaseProvider,
        registerMemberUseCaseProvider,
        getMemberUseCaseProvider,
        { provide: MemberService, useClass: MemberImplementationRepository },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DataModule { }