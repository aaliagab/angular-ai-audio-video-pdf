import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Access } from '../models/access';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAccesses(): Observable<Access[]> {
    return this.http.get<Access[]>(`${this.apiUrl}/accesses/`);
  }

  getAccess(accesstoken_id: string): Observable<Access> {
    return this.http.get<Access>(`${this.apiUrl}/accesses/${accesstoken_id}`);
  }

  createAccess(access: Access): Observable<Access> {
    return this.http.post<Access>(`${this.apiUrl}/accesses`, access);
  }

  updateAccess(accesstoken_id: string, access: Access): Observable<Access> {
    return this.http.put<Access>(`${this.apiUrl}/accesses/${accesstoken_id}`, access);
  }

  deleteAccess(accesstoken_id: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/accesses/${accesstoken_id}`);
  }
}
