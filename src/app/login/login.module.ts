import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module'

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,

  ]
})
export class LoginModule { }
