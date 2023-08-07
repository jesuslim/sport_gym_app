import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  constructor( public formBuilder: FormBuilder ) {
    this.registroForm = this.formBuilder.group(
      {
        //'nombre': new FormControl("", Validators.required),
        'Nombre': new FormControl('', Validators.required),
        'Apellido_Paterno': new FormControl('', Validators.required),
        'Apellido_Materno': new FormControl('', Validators.required),
        'Matricula': new FormControl('', Validators.required),
        'ID_Perfil': new FormControl('', Validators.required),
        'Genero': new FormControl('', Validators.required),
        'Fecha_Nacimiento': new FormControl('', Validators.required),
        'Correo_Electronico': new FormControl('', Validators.required),
        'ID_Estado': new FormControl('', Validators.required),
        'ID_Municipio': new FormControl('', Validators.required),
        'Colonia': new FormControl('', Validators.required),
        'Codigo_Postal': new FormControl('', Validators.required),
        'Entrenamiento': new FormControl(''),
        'Tipo_Entrenamiento': new FormControl(''),
        'Lesion': new FormControl(''),
        'Tipo_Lesion': new FormControl(''),
        'Objetivo': new FormControl(''),
        'Contrasena': new FormControl('', Validators.required),
      }
    )
   }

  ngOnInit() {
  }

  register(form: any) {
    console.log(form);

  }

}
