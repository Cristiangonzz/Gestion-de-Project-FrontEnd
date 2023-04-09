import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [SearchComponent,InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ SearchComponent,InputComponent ]
})
export class SharedModule { }
