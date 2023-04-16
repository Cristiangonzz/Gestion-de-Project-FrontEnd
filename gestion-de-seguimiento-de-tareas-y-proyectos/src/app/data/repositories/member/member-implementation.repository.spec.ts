import { MemberImplementationRepository } from "./member-implementation.repository";
import { IMemberDomainModel } from "src/app/domain/interfaces/member/member.interface.domain";
import { IRegisterMemberDomainModel } from "src/app/domain/interfaces/member/register-member.interface.domain";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";

describe('MemberImplementationRepository', () => {
    let repository: MemberImplementationRepository;
    let httpTestingController: HttpTestingController;
    const registerMember: IRegisterMemberDomainModel = {
        name: "string",
        document: "string",
        salary: 12,
        role: "string",

        email:"string@gmial.com",
        password:"string",
      };
    const member: IMemberDomainModel = {
        _id:"123123",
    name: "string",
    document: "string",
    salary: 12,
    role: "string",

    email:"string@gmial.com",
    password:"string",
    };
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [MemberImplementationRepository]
      });
      repository = TestBed.inject(MemberImplementationRepository);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpTestingController.verify();
    });
  
    it('should create an instance', () => {
      expect(repository).toBeTruthy();
    });
  
    it('should register a collaboration', () => {
      
      repository.register(member).subscribe(response => {
        expect(response).toEqual(member);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/member/create`);
      expect(req.request.method).toEqual('POST');
      req.flush(member);
    });

    it('should delete a member', () => {
      const memberId = '123123';
      repository.deleteMember(memberId).subscribe(response => {
        expect(response).toBeTrue();
      });
      const req = httpTestingController.expectOne(`${repository.URL}/member/delete/${memberId}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(true);
    })

    it('should get a member', () => {
      const memberId = '123123';

      repository.getMember(memberId).subscribe(response => {
        expect(response).toEqual(member);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/member/get/${memberId}`);
      expect(req.request.method).toEqual('GET');
      req.flush(member);
    });
  
    it('should update a member', () => {
      
      repository.updateMember(member).subscribe(response => {
        expect(response).toEqual(member);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/member/update/${member._id}`);
      expect(req.request.method).toEqual('PUT');
      req.flush(member);
    });
});