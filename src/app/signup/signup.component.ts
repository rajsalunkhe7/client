import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Name='';
  Email='';
  Phone=0;
  Password='';
  CPassword='';

  constructor(private service:SignupService) { 

  }

  ngOnInit() {
  }
  signup(){

   this.service
   .addUser(this.Name,this.Email,this.Phone,this.Password,this.CPassword)
   .subscribe(response => {
     alert('user added');
     this.cancel();

    
   });

  }
  cancel(){
    this.Name='';
    this.Email='';
    this.Phone=0;
    this.Password='';
    this.CPassword='';
  }

}
