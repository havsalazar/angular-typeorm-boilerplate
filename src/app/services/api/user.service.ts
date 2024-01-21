import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getUsers():Observable<any[]>{
    return  this.http.get<Array<any>>(`${this.baseUrl}/users`)
  }
  getUser(id:string){
    return  this.http.get<any>(`${this.baseUrl}/users/getUserById/${id}`)
  }
  saveUser(user:any){
    const {id,...data}=user
    console.log(user)
    if(id!==''){
      return this.http.put(`${this.baseUrl}/users/${id}`,data)
    }else{      
      return this.http.post(`${this.baseUrl}/users/`,data)
    }
  }
  deleteUser(id:string){
    return  this.http.delete<any>(`${this.baseUrl}/users/${id}`)
  }
}
