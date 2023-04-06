import { Component, OnInit } from '@angular/core';
import { UpdateMemberUseCase } from 'src/application/usecases/member/update-member.usecase';
import { IUpdateMemberModel } from 'src/domain/interfaces/member/update-member.interface.domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestion-de-seguimiento-de-tareas-y-proyectos';

  constructor(private readonly useCase : UpdateMemberUseCase) {}
   member : IUpdateMemberModel  = {
    _id:"642da9242f6328fd9dd4d5e1",
    name: "cristia",
    document: "559758664",
    salary: 100,
    role: "programador",
    email: "updatiado@gmail.com",
    password: "113223",
  }
  ngOnInit(): void {
    this.useCase.execute(this.member).subscribe((value) => {
      console.log(value);
    });
  }
}
