import { Component, OnInit } from '@angular/core';
import { GetMemberUseCase } from 'src/application/usecases/member/get-member.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gestion-de-seguimiento-de-tareas-y-proyectos';

  constructor(private readonly useCase : GetMemberUseCase) {}

  ngOnInit(): void {
    this.useCase.execute("642c52150e21254d600d77ce").subscribe((value) => {
      console.log(value);
    });
  }
}
