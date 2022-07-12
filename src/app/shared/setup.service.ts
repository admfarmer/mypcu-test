import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  token: any;
  httpOptions: any;

  constructor(@Inject('API_URL') private apiUrl: string, private httpClient: HttpClient) {
    this.token = sessionStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
  }

  async list(info:object) {
    const _url = `${this.apiUrl}/setup/list`;
    return this.httpClient.post(_url,info,this.httpOptions).toPromise();
  }   

  async save(info:object) {
    const _url = `${this.apiUrl}/setup`;
    return this.httpClient.post(_url,info,this.httpOptions).toPromise();
  }    

  async update(id:any,info:object,) {
    const _url = `${this.apiUrl}/setup/${id}`;
    return this.httpClient.put(_url,info,this.httpOptions).toPromise();
  }    

  async delete(id:any) {
    const _url = `${this.apiUrl}/setup/${id}`;
    return this.httpClient.delete(_url,this.httpOptions).toPromise();
  }    
}
