import { Component, OnInit } from '@angular/core';
import {UserApiService} from './../../../services/api/user.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  public userList:any[]=[];
  constructor(
    private userApi:UserApiService
    ){

  }

  ngOnInit(): void {
    this.LoadList()
  }
  LoadList(){
    this.userApi.getUsers().subscribe({
      next: (value) => this.userList = value,
      error: (e) => console.log(e),
      complete: () => {}
    })
  }
  DeleteUser(id:string){
    this.userApi.deleteUser(id).subscribe({
      next: (value) => this.LoadList(),
      error: (e) => console.log(e),
      complete: () => {}
    })
  }
}
