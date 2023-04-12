import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { InputComponent } from './input/input.component';
import { DataModule } from 'src/app/data/data.module';



@NgModule({
  declarations: [SearchComponent,InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataModule,
  ],
  exports: [ SearchComponent,InputComponent ]
})
export class SharedModule { }
