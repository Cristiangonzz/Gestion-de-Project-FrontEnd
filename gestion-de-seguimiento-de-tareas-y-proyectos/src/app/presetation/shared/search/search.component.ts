import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  types: string[] = ['Member', 'Collaboration', 'Project', 'Task' ,'Team'];

  public typeForm!: FormGroup;
  public form!: FormGroup;

  constructor(
    private readonly router : Router,
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

  search(){
    
    if(this.typeForm.get('type')?.value == 'Member'){
      this.router.navigate([`member/listOne/${this.form.get('searchId')?.value}`]);
    }

    if(this.typeForm.get('type')?.value == 'Collaboration'){
      //Pasarle el id del customer para que te retorne la cuenta 
      this.router.navigate([`collaboration/listOne/${this.form.get('searchId')?.value}`]);
    }

    if(this.typeForm.get('type')?.value == 'Project'){
      this.router.navigate([`project/listOne/${this.form.get('searchId')?.value}`]);
    }

    if(this.typeForm.get('type')?.value == 'Task'){
      //Pasarle el id del customer para que te retorne la cuenta 
      this.router.navigate([`task/listOne/${this.form.get('searchId')?.value}`]);
    }

    if(this.typeForm.get('type')?.value == 'Team'){
      //Pasarle el id del customer para que te retorne la cuenta 
      this.router.navigate([`team/listOne/${this.form.get('searchId')?.value}`]);
    }
    
    
  }
}
