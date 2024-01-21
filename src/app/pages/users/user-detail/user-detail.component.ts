import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from './../../../services/api/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userApi:UserApiService
    ){
  }

  public userForm=this.formBuilder.group({
    id:[''],
    firstName: ['',Validators.required],
    lastName: [''],
    isActive: [false],
  })

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id != 'new') {
      this.userApi.getUser(id).subscribe({
        next: (value) => {
          if(value){
            this.userForm.patchValue({...value})
          }
        },
        error: (e) => console.log(e),
      });
    }
  }

  onSubmit(){
    this.userApi.saveUser(this.userForm.value ).subscribe({
      next:(value)=> {
        console.log(value)
        this.router.navigate(['/users'])
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
