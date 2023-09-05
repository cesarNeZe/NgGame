import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      // setHeaders: {
      //   'X-RapidAPI-Key': '3d8ca253d4msh12bdda95cd601eep194910jsn6f3869aa3ccc',
      //   'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
      // },
      setParams: {
        key: 'e82790b4078b4a69be9ab17ca22ded37',
      }
    });
    return next.handle(req);
  }
}