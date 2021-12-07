import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/iuser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public choice : string = "Employee";
  public email : string = "";
  public password : string = "";

  constructor(private _service : AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  Login(){
    this._service.Login(this.choice,this.email,this.password).subscribe(data =>{
      sessionStorage.setItem("session",JSON.stringify(data.id)),
      sessionStorage.setItem("username",data.username),
      sessionStorage.setItem("firstname",data.firstname),
      sessionStorage.setItem("lastname",data.lastname),
      sessionStorage.setItem("email",data.email),
      sessionStorage.setItem("token",data.token),
      sessionStorage.setItem("role",data.role)
      ;console.log(data);
    })
    this._router.navigate([""])
  }

  GetSessionObj(storage:string|null):IUser|null{
    if(storage != null){
      return JSON.parse(storage)
    }else{
      return null
    }
  }
}