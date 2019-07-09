import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {HttpRequest} from '../interfaces/request/http-request';
import {map} from 'rxjs/operators';

@Injectable()
export class RssRequest implements HttpRequest {

    constructor(private readonly http: HttpService) {
    }

    public get(url: string): Observable<string> {
        return this.http.get<string>(url).pipe(
            map(value => value.data),
        );
    }
}
