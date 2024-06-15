import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getContents(): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}/contents/`);
  }

  getContent(contentId: string): Observable<Content> {
    return this.http.get<Content>(`${this.apiUrl}/contents/${contentId}`);
  }

  createContent(content: Content): Observable<Content> {
    return this.http.post<Content>(`${this.apiUrl}/contents/`, content);
  }

  updateContent(contentId: string, content: Partial<Content>): Observable<Content> {
    return this.http.put<Content>(`${this.apiUrl}/contents/${contentId}`, content);
  }

  deleteContent(contentId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/contents/${contentId}`);
  }
}
