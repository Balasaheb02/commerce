import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { LoadingService } from '../../app/services/loading.service';
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(public loaderService: LoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.loading$.next(true);
        return next.handle(req).pipe(
            finalize(() => this.loaderService.loading$.next(false))
        );
    }

}