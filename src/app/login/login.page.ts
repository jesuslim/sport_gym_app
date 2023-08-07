import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formlogin: FormGroup;

  constructor( public formBuilder: FormBuilder) {
    this.formlogin = this.formBuilder.group(
      {
        'Correo_Electronico': new FormControl("", Validators.required),
        'Contrasena': new FormControl("", Validators.required),
      }
    )
   }

  ngOnInit() {
  }

  login(form: any) {
    console.log(form);

  }

}
