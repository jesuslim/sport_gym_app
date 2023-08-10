import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formlogin: FormGroup;
  sesion: any;

  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formlogin = this.formBuilder.group(
      {
        'Correo_Electronico': new FormControl("", Validators.required),
        'Contrasena': new FormControl("", Validators.required),
      }
    )
  }

  ngOnInit() {
    this.sesion = localStorage.getItem("ID_Usuario");
    if (this.sesion) {
      this.router.navigate(['menu/inicio']);
    }
  }

  login(form: any) {
    if (this.formlogin.valid) {
      this.authService.loginAuth(form).subscribe(
        (response) => {
          localStorage.setItem("ID_Usuario", response['ID_Miembro']);
          this.router.navigate(['menu/inicio']);
        },
        (err) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.error.messages.error,
            showConfirmButton: false,
            timer: 1500,
            heightAuto: false,
          })
        });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Llena todos los campos',
        showConfirmButton: false,
        timer: 1500,
        heightAuto: false,
      }).then(() => {
        this.formlogin.markAllAsTouched();
      }
      )
    }

  }

  // TODO: borrar
  probicional() {
    this.router.navigate(['menu/inicio']);
  }

}
