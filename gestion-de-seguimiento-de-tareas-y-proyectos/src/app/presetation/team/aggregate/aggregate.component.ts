import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AggregateCollaborationOfTeamUseCase } from 'src/app/application/usecases/team/aggregate-collaboration-team.usecase';
import { AggregateMemberOfTeamUseCase } from 'src/app/application/usecases/team/aggregate-member-team.usecase';
import { AggregateTaskOfTeamUseCase } from 'src/app/application/usecases/team/aggregate-task-team.usecase';
import { IAgregateCollaborationOfTeamModel } from 'src/app/domain/interfaces/collaboration/agregate-collaboration-of-team.dto';
import { IAgregateMemberOfTeamModel } from 'src/app/domain/interfaces/member/agregate-member-of-team.dto';
import { IAgregateTaskOfTeamModel } from 'src/app/domain/interfaces/task/agregate-task-of-team.dto';

@Component({
  selector: 'app-aggregate',
  providers: [AggregateCollaborationOfTeamUseCase, AggregateMemberOfTeamUseCase, AggregateTaskOfTeamUseCase],
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.css']
})
export class AggregateComponent implements OnInit{

  @Input() teamId!: string;
  types: string[] = ['Member', 'Collaboration', 'Task' ];

  public typeForm!: FormGroup;
  public form!: FormGroup;
 
  constructor(
    private readonly router : Router,
    private readonly aggregateTaskUseCase : AggregateTaskOfTeamUseCase,
    private readonly aggregateCollaborationUseCase : AggregateCollaborationOfTeamUseCase,
    private readonly aggregateMemberUseCase : AggregateMemberOfTeamUseCase,
    private formBuilder : FormBuilder){}

    ngOnInit(): void {
      this.form = this.initForm();
      this.typeForm = this.initFormOption();  
    }


    initForm():FormGroup{
      return this.formBuilder.group(
        {
          searchId:['',[Validators.required]],
        })
    }
  
    initFormOption():FormGroup{
      return this.formBuilder.group(
        {
          type:[''],
        })
    }

  add(){
    console.log(this.typeForm.get('type')?.value);
    if(this.typeForm.get('type')?.value == 'Member'){
      const member : IAgregateMemberOfTeamModel = {
        team: this.teamId,
        member: this.form.get('searchId')?.value
      }
      console.log(member);
     this.aggregateMemberUseCase.execute(member).subscribe(
        (data) => {
          console.log(data);
        }
     );
    }

    if(this.typeForm.get('type')?.value == 'Collaboration'){
      const collaboration : IAgregateCollaborationOfTeamModel = {
        team: this.teamId,
        collaboration: this.form.get('searchId')?.value
      }
      this.aggregateCollaborationUseCase.execute(collaboration);
    }

    if(this.typeForm.get('type')?.value == 'Task'){
      const task : IAgregateTaskOfTeamModel = {
        team: this.teamId,
        task: this.form.get('searchId')?.value
      }
      this.aggregateTaskUseCase.execute(task);
    }

    
    
  }
}
