import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { IEmployee, IUser } from '../models/iuser';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) { }

  GetAllEmployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(env.baseUrl+'Employee');
  }

  Login(choice : string,email:string,passwd:string): Observable<IUser>{
    return this.http.post<IUser>(env.baseUrl+"Auth",{choice,email,passwd})
  }
}


