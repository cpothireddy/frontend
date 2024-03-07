import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from "@angular/forms";
import { UserService } from '../../common/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router:Router){}

  ngOnInit(){
    // this.userService.userBasket.subscribe((data)=>{
    //   console.log('subscribed from login', data);
    // })
  }

  loginForm = new FormGroup({
    'username': new FormControl(null, [Validators.required]),
    'password': new FormControl(null, [Validators.required])
})
checkLogin(){
    const regValues:any = this.loginForm.value;
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      console.log('regValues', regValues);
      this.userService.loginUser(regValues).subscribe((data)=>{
        console.log('data in login', data);
        if (data) {
          const data1 = (data as any).user;
          const token = (data as any).token;
          localStorage.setItem("id_token", token);
          this.router.navigate(['/dashboard-module']);
      }
      })
    }
  }
}

