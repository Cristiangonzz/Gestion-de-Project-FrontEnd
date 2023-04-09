import { Component, Input, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  
  @Input() control: FormControl= new FormControl();
  @Input() label: string = ""
  @Input() type: string = ""
  @Input() inputId: string = ""
  @Input() placeHolder: string = "";
 

  errorMessages: Record<string, string> = {
    required: 'this field is required',
    email: 'this email is invalid',
    minlength: 'this field must have at least 8 characters',
  };
  
}
