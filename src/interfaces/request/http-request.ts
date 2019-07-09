import {Observable} from 'rxjs';

export interface HttpRequest {
    get(url: string): Observable<string>;
}
