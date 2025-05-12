import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post('/api/user/register', data);
  }

  login(data: any): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('http://localhost:5004/api/login', data)
      .pipe(tap(res => localStorage.setItem('token', res.token)));
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
} 