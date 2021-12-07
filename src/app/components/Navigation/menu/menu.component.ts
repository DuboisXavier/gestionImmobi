import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavItem } from 'src/app/models/inav-item';
import { IEmployee, IUser } from 'src/app/models/iuser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public route : INavItem[] = [];
  public employee : IEmployee[] = [];
  public session! : Storage;


  constructor(private _service : AuthService,private _router : Router) { }

  ngOnInit(): void {
    this.session = sessionStorage;
    this.route = [
      {title : 'Acceuil',url : '/Acceuil', isVisible : true}
    ]
  }

  Connect():void{
    this._service.GetAllEmployee().subscribe(data => { this.employee = data; console.log(data);})
  }
  Logout(){
    sessionStorage.clear();
    this._router.navigate([""])
  }
}
