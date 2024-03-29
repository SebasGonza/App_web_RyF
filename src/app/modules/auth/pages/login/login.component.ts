import { Router } from '@angular/router';
import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
import { UntypedFormGroup, Validators, UntypedFormBuilder } from '@angular/forms';

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

  error: string = '';
  respuestaError: Boolean = false;
  token?: string = '';
  showPassword: Boolean = true;

  @ViewChild('inputPassword') inputPassword!: ElementRef<HTMLInputElement>;

  miFormulario: UntypedFormGroup = this.fmbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [, [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private fmbuilder: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  login() {
    this.auth.email = this.miFormulario.controls['email'].value;
    this.auth.password = this.miFormulario.controls['password'].value;

    this.authService.login(this.auth).subscribe({
      next: (data: AuthResponse) => {
        this.respuestaError = false;
        this.token = data.token;
        localStorage.setItem('token', this.token ?? '');
        this.router.navigate(['/home/dashboard']);
      },
      error: () => {
        this.error = 'Error en las credenciales';
        this.respuestaError = true;
      },
    });
  }

  toggleShowEye(): void {
    console.log('holi');
    this.showPassword = !this.showPassword;
    this.inputPassword.nativeElement.type = this.showPassword ? 'text' : 'password';
  }
}
