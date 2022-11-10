import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/usuariosDto';
import { AuthResponse } from '../models/authResponseDto';
import { Auth } from '../models/authDto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario!: User;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) {}

  login(auth: Auth): Observable<AuthResponse> {
    const url = this.baseUrl + '/auth';
    return this.http.post<AuthResponse>(url, auth);
  }
}
