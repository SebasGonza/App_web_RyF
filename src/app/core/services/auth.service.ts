import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/usuariosDto';
import { AuthResponse } from '../models/authResponseDto';
import { Auth } from '../models/authDto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario?: User;

  get usuario(): User | undefined {
    if (!this._usuario) return undefined;
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  logIn(auth: Auth): Observable<AuthResponse> {
    const url = this.baseUrl + '/auth';
    return this.http.post<AuthResponse>(url, auth);
  }

  checkAuthetication(): Observable<boolean> | boolean {
    if (!localStorage.getItem('token')) return false;
    return of(true);
  }

  logOut(): void{
    localStorage.clear();
  }
}
