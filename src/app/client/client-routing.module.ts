import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from '../client/layout/layout.component';
import {HomeComponent} from '../client/home/home.component';
import { PatientComponent } from './patient/patient.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  {
    path: 'client', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'patient', component: PatientComponent },
      { path: 'setup', component: SetupComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
