import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingHomeModule } from './routing-home.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { DataModule } from 'src/app/data/data.module';



@NgModule({
  declarations: [ 
    HomeComponent
  ],
  imports: [
    DataModule,
    
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    RoutingHomeModule,
    SharedModule,

  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
