import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Source } from '../models/source';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSources(): Observable<Source[]> {
    return this.http.get<Source[]>(`${this.apiUrl}/sources/`);
  }

  getSource(sourceId: string): Observable<Source> {
    return this.http.get<Source>(`${this.apiUrl}/sources/${sourceId}`);
  }

  createSource(source: Source): Observable<Source> {
    return this.http.post<Source>(`${this.apiUrl}/sources`, source);
  }

  updateSource(sourceId: string, source: Source): Observable<Source> {
    return this.http.put<Source>(`${this.apiUrl}/sources/${sourceId}`, source);
  }

  deleteSource(sourceId: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/sources/${sourceId}`);
  }
}
