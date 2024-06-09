import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const authObject = JSON.parse(authData); 
      console.log('Authorization header value:', authObject.token);  
      try {
        request = request.clone({
          setHeaders: {
            'Authorization': authObject.token,
            'Accept': 'application/json'
          }
        });
        console.log('Authorization header added', request);
        console.log('Authorization header added to request:', request.headers.get('Authorization'));
      } catch (error) {
        console.error('Error parsing auth data from localStorage', error);
      }
    } else {
      console.error('No auth data found in localStorage');
    }
    return next.handle(request);
  }
}
