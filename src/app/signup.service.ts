import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = 'http://localhost:7000/user';

  constructor( private http:Http) { 


  }

  addUser(name:string,email:string,phone:number,password:any,cpassword:any){

    const body ={
      Name:name,
      Email:email,
      Phone:phone,
      Password:password,
      CPassword:cpassword
    }

    const header = new Headers({'Content-Type':'application/json'});
    const requestOptions = new RequestOptions({headers:header});

    return this.http.post(this.url,body,requestOptions);

  }

  checkUser(Email:string,Password:any){

    const body= {
      Email:Email,
      Password:Password
    }

    const header = new Headers({'Content-Type':'application/json'});
    const requestOptions = new RequestOptions({headers:header});

    return this.http.post(this.url + '/signin',body,requestOptions);
  
  }
}
