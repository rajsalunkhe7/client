import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  Email='';
  Password='';
  
  constructor(private service:SignupService) { 

  }

  ngOnInit() {
  }

  signin(){
    this.service
    .checkUser(this.Email,this.Password)
    .subscribe(response =>{
      const result = response.json();
      if(result.status == 'success'){
        alert('welcome to hell');
        this.cancel();
      }else{
        alert('go to hell');
        this.cancel()
      }

    });
  }

  cancel(){
    this.Email='';
    this.Password='';
  }

}
