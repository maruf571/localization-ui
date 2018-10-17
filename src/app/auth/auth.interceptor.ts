import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("Inside interceptot");
        const token = localStorage.getItem("token");
        if ( token) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization", "Bearer " +  token)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}