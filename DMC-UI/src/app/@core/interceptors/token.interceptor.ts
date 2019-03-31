import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UserService } from '../services/user/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private readonly userService: UserService,
        private readonly router: Router) { }

    public intercept(initialRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const request = this.addAuthenticationToken(initialRequest);

        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error instanceof HttpErrorResponse) {
                        if (error.status === 400) {
                            return throwError(error);
                        }
                        if (error.status === 403) {
                            this.redirectToError();
                        }
                    }

                    return throwError(error);
                }));
    }

    private addAuthenticationToken(request): HttpRequest<any> {
        return request.clone({
            setHeaders: {
                ContentType: 'application/json',
                Authorization: `Bearer ${this.userService.user.token}`,
                AccessControlAllowOrigin: '*'
            }
        });
    }

    private redirectToError(): void {
        this.router.navigate(['/login']);
    }
}
