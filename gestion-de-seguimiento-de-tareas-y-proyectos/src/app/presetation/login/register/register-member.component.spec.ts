// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { RegisterMemberComponent } from "./register-member.component";
// import { RegisterMemberUseCase } from "src/app/application/usecases/member/register-member.usecase";
// import { Router } from "@angular/router";
// import { IMemberDomainModel } from "src/app/domain/interfaces/member/member.interface.domain";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { SharedModule } from "../../shared/shared.module";
// import { of } from "rxjs";
// import { MemberService } from "src/app/domain/services/member/member.service";



// describe('CreateCollaborationComponent', () => {
//     let component: RegisterMemberComponent;
//     let fixture: ComponentFixture<RegisterMemberComponent>;
//     let useCase: jasmine.SpyObj<RegisterMemberUseCase>;
//     let router: Router;
//     const entity : IMemberDomainModel = {
//         _id: "123123",
//         name: "",
//         document: "",
//         salary: 0,
//         role: "",
//         email:"",
//         password:"",  
//     };
//     beforeEach(async () => {
      
//         useCase = jasmine.createSpyObj('RegisterMemberUseCase', ['execute']);
      
//       await TestBed.configureTestingModule({
//         declarations: [ RegisterMemberComponent],
//         imports: [ FormsModule, ReactiveFormsModule ,SharedModule],
//         providers: [
//             { provide: RegisterMemberUseCase, useValue: useCase },
//             {
//                 provide: MemberService,
//                 useValue: {
//                 register: () => of(entity),
//                 },
//                 },
//           {
//             provide: Router,
//             useValue: {
//               navigate: () => {},
//             },
//           },

//         ]
//       })
//       .compileComponents();
//     });
  
//     beforeEach(() => {
//       fixture = TestBed.createComponent(RegisterMemberComponent);
//       component = fixture.componentInstance;
//       router = TestBed.inject(Router);
//       fixture.detectChanges();
//     });
// });