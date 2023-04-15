import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import {  of } from 'rxjs';
import { ListOneTeamComponent } from './list-one-team.component';
import { TeamService } from 'src/app/domain/services/team/team.service';
import { GetTeamUseCase } from 'src/app/application/usecases/team/get-team.usecase';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { useCaseProviders } from 'src/app/data/factory';
import { AggregateComponent } from '../aggregate/aggregate.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ListOneTeamComponent', () => {
 let component: ListOneTeamComponent;
 let fixture: ComponentFixture<ListOneTeamComponent>;
 let service: TeamService;
 let router: Router;
 let activatedRoute: ActivatedRoute;
 let useCase: GetTeamUseCase;

 const entity : ITeamDomainModel = {
    name: "team1",
    member: ["12123123"],
    task: ["123123"],
    project:"123123" ,
    collaboration: ["123123"],
 };

 beforeEach(async () => {
   await TestBed.configureTestingModule({
     declarations: [ListOneTeamComponent,AggregateComponent],
     imports: [ReactiveFormsModule],
     providers: [
       {
         provide: TeamService,
         useValue: {
           deleteTeam: () => of(null),
         },
       },
       {
         provide: ActivatedRoute,
         useValue: {
           params: of({ id: '1' }),
         },
       },
       useCaseProviders.getTeamUseCaseProvider,
       {
         provide: Router,
         useValue: {
           navigate: () => {},
         },
       },
     ],
   }).compileComponents();
 });

 beforeEach(() => {
   fixture = TestBed.createComponent(ListOneTeamComponent);
   component = fixture.componentInstance;
   service = TestBed.inject(TeamService);
   router = TestBed.inject(Router);
   activatedRoute = TestBed.inject(ActivatedRoute);
   useCase = TestBed.inject(GetTeamUseCase);
   spyOn(useCase, 'execute').and.returnValue(of(entity));
   fixture.detectChanges();
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should call GetTeamUseCase with team id and assign the result to team variable', () => {
   const teamId = '1';
   component.ngOnInit();
   expect(useCase.execute).toHaveBeenCalledWith(teamId);
   expect(component.team).toEqual(entity);
 });

 it('should navigate to update component on update method', () => {
   const spy = spyOn(router, 'navigate');
   component.teamId = '1';
   component.update();
   expect(spy).toHaveBeenCalledWith(['team/update/1']);
 });

 it('should not call deleteTeamUseCase and not navigate on delete method if user cancels', () => {
   const spy = spyOn(service, 'deleteTeam').and.callThrough();
   spyOn(window, 'confirm').and.returnValue(false);
   const navigateSpy = spyOn(router, 'navigate');
   component.teamId = '1';

   component.delete();
   expect(spy).not.toHaveBeenCalled();
   expect(navigateSpy).not.toHaveBeenCalled();
 });
});