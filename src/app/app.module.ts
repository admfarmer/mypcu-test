import { NgModule } from '@angular/core';

import {MenuItem} from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';
import { JwtModule } from '@auth0/angular-jwt';

import { SharedModule } from '../app/shared/shared.module'
import { LoginModule } from '../app/login/login.module'
import { ClientModule } from '../app/client/client.module';



export function tokenGetter() {
  return sessionStorage.getItem('token');
}
export const whitelistedDomains = [new RegExp('[\s\S]*')] as RegExp[];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: whitelistedDomains,
        disallowedRoutes: ['/client']
      }
    }),
    LoginModule,
    ClientModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'API_URL', useValue: environment.apiUrl },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
