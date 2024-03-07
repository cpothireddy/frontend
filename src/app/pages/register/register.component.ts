import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators,  } from "@angular/forms";
import { UserService } from '../../common/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private usrService: UserService){}
  registerForm = new FormGroup({
    'username': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.email]),
    'password': new FormControl(''),
    'phone': new FormControl(''),
    'notification': new FormControl('', Validators.required)
})

  ngOnInit() {
    this.registerForm.controls['notification'].valueChanges.subscribe((newVal) => {
      const emailControl = this.registerForm.controls['email'];
      const phoneControl = this.registerForm.controls['phone'];
      if (newVal === 'email') {
        emailControl.addValidators([Validators.required]);
        emailControl.updateValueAndValidity();
      } else if (newVal === 'phone') {
        phoneControl.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]);
        phoneControl.updateValueAndValidity();
      }
    })
  }


  onSubmit() {
    const regValues: any = this.registerForm.value;
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      this.usrService.registerUser(regValues).subscribe((data:any)=>{
        console.log(data);
      })
      // this.usrService.postUserData(regValues);
      // this.usrService.userBasket.subscribe((data: any) => {
      //   console.log(data);
      // });
      //this.registerForm.reset();
    }
  }

}
