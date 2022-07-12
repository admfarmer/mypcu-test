import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module'

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { PatientComponent } from './patient/patient.component';
import { SetupComponent } from './setup/setup.component';


@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    LayoutComponent,
    PatientComponent,
    SetupComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
