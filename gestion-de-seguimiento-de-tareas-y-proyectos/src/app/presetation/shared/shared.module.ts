import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { InputComponent } from './input/input.component';
import { DataModule } from 'src/app/data/data.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { FindallComponent } from './findall/findall.component';



@NgModule({
  declarations: [
    SearchComponent,
    InputComponent,
    ToolbarComponent,
    FindallComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataModule,
    MaterialModule,
    DataModule,
  ],
  exports: [ 
    SearchComponent,
    InputComponent ,
    ToolbarComponent
  ]
})
export class SharedModule { }
