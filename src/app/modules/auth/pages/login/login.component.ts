import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/core/models/usuariosDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = {
    username: '',
    document: '',
    email: '',
    documentType: 0,
    password: '',
    phoneNumber: '',
  };

  error: string = '';
  respuestaError: Boolean = false;

  miFormulario: FormGroup = this.fmbuilder.group({
    email: [, Validators.required],
    password: [, [Validators.required]],
  });

  constructor(private fmbuilder: FormBuilder) {}

  login() {
    this.user.email = this.miFormulario.controls['correo'].value;
    this.user.email = this.miFormulario.controls['password'].value;
  }
}
