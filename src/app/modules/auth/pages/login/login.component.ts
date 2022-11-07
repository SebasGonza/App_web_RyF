import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { AuthResponse } from '../../../../core/models/authResponseDto';
import { Auth } from 'src/app/core/models/authDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  auth: Auth = {
    email: '',
    password: '',
  };

  error?: string = '';
  respuestaError: Boolean = false;
  token?: string = '';

  miFormulario: FormGroup = this.fmbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private fmbuilder: FormBuilder,
    private authService: AuthService
  ) {}

  login() {
    this.auth.email = this.miFormulario.controls['email'].value;
    this.auth.password = this.miFormulario.controls['password'].value;

    this.authService.login(this.auth).subscribe({
      next: (data: AuthResponse) => {
        this.respuestaError = false;
        this.error = '';
        this.token = data.token;
        localStorage.setItem('token', this.token ?? '');
        
      },
      error: () => {
        this.error = 'Error en las credenciales';
        this.respuestaError = true;
      },
    });
  }
}
