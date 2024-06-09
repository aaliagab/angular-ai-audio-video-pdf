import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(userName: string, password: string): Observable<any> {
    let params = new HttpParams().set('user_name', userName).set('password', password);
    return this.http.post<any>(`${this.apiUrl}/auth/authenticate`, {}, { params }).pipe(
      tap(response => {
        localStorage.setItem('auth', response);
        this.router.navigate(['/dashboard']);
      })
    );
  }
}
