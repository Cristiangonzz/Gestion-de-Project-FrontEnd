import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { TeamImplementationRepository } from './team-implementation.repository';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { IUpdateTeamModel } from 'src/app/domain/interfaces/team/update-team.interface.domain';
import { IAgregateTaskOfTeamModel } from 'src/app/domain/interfaces/task/agregate-task-of-team.dto';
import { IAgregateCollaborationOfTeamModel } from 'src/app/domain/interfaces/collaboration/agregate-collaboration-of-team.dto';
import { IAgregateMemberOfTeamModel } from 'src/app/domain/interfaces/member/agregate-member-of-team.dto';

describe('TeamImplementationRepository', () => {
    let repository: TeamImplementationRepository;
    let httpTestingController: HttpTestingController;
    const team: ITeamDomainModel = {
      name: "string",
      member: ["string"],
      task: ["string"],
      project: "string",
      collaboration: ["string"],
      };
    const updateTeam: IUpdateTeamModel = {
        _id:"123123",
        name: "string",
        proyect: "string",
      
    };
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [TeamImplementationRepository]
      });
      repository = TestBed.inject(TeamImplementationRepository);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpTestingController.verify();
    });
  
    it('should create an instance', () => {
      expect(repository).toBeTruthy();
    });
  
    it('should register a collaboration', () => {
      
      repository.register(team).subscribe(response => {
        expect(response).toEqual(team);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/team/create`);
      expect(req.request.method).toEqual('POST');
      req.flush(team);
    });

    it('should delete a team', () => {
      const teamId = '123123';
      repository.deleteTeam(teamId).subscribe(response => {
        expect(response).toBeTrue();
      });
      const req = httpTestingController.expectOne(`${repository.URL}/team/delete/${teamId}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(true);
    })

    it('should get a team', () => {
      const teamId = '123123';

      repository.getTeam(teamId).subscribe(response => {
        expect(response).toEqual(team);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/team/get/${teamId}`);
      expect(req.request.method).toEqual('GET');
      req.flush(team);
    });
  
    it('should update a team', () => {
      
      repository.updateTeam(updateTeam).subscribe(response => {
        expect(response).toEqual(team);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/team/update/${updateTeam._id}`);
      expect(req.request.method).toEqual('PUT');
      req.flush(team);
    });

    it('should aggregate task a team', () => {
      const aggregate : IAgregateTaskOfTeamModel = {
        team: "string" ,
        task: "string",
      };

      repository.aggregateTaskOfTeam(aggregate).subscribe(response => {
        expect(response).toEqual(team);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/team/agregate-task`);
      expect(req.request.method).toEqual('PUT');
      req.flush(team);
    });


    it('should aggregate collaboration a team', () => {
      const aggregate : IAgregateCollaborationOfTeamModel = {
        team: "string" ,
        collaboration: "string",
      }
      repository.aggregateCollaborationOfTeam(aggregate).subscribe(response => {
        expect(response).toEqual(team);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/team/agregate-collaboration`);
      expect(req.request.method).toEqual('PUT');
      req.flush(team);
    });


    it('should aggregate member a team', () => {
      const aggregate : IAgregateMemberOfTeamModel = {
        team: "string",
        member: "string"  
      }
      repository.aggregateMemberOfTeam(aggregate).subscribe(response => {
        expect(response).toEqual(team);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/team/agregate-member`);
      expect(req.request.method).toEqual('PUT');
      req.flush(team);
    });
});