import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  uploadFile(endpoint: string, formData: FormData, sourceId: string, accesstokenId: string): Observable<any> {
    const url = `${this.apiUrl}${endpoint}?source_id=${sourceId}&accesstoken_id=${accesstokenId}`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
    });
    return this.http.post(url, formData, { headers });
  }
}