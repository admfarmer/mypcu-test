import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared/login.service';
import {AlertService} from '../shared/alert.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  jwtHelper = new JwtHelperService();

  constructor(
    private loginService:LoginService,
    private alertService:AlertService,
    private router:Router,

  ) { }

  ngOnInit(): void {
  }

  async doLogin(){
    if(this.username && this.password){
      try {
        let rs:any = await this.loginService.login(this.username,this.password);
        console.log(rs);

        // const decoded: any = this.jwtHelper.decodeToken(rs.rows);
        // console.log(decoded);

        // let token:any = JSON.stringify(rs);
        if(rs.ok){
          sessionStorage.setItem('token',rs.rows.accessToken);
          sessionStorage.setItem('fullName',rs.rows.accessToken);
          sessionStorage.setItem('userId',rs.rows.accessToken);
          this.router.navigate(["/client"]);
        }
      } catch (error:any) {
        console.log(error);
        this.alertService.error(error.error.message);
      }
    }
  }
}
