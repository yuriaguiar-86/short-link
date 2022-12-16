import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  private shortencode = environment.api;

  constructor( private http: HttpClient ) { }

  shortenUrl(url: string): Observable<any> {
    return this.http.get<any>(this.shortencode + url).pipe(first(), delay(0));
  }
}
