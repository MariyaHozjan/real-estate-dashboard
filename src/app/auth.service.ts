import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenStorageKey = 'authToken';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>('http://localhost:8080/login', { username, password })
      .pipe(
        tap((res) => localStorage.setItem(this.tokenStorageKey, res.token)),
        catchError(this.handleError)
      );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenStorageKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenStorageKey);
  }

  private handleError(error: any): Observable<never> {
    // Handle the error appropriately in your app
    console.error('Login failed', error);
    throw error;
  }
}
