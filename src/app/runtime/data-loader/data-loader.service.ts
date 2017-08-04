import {Injectable} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {DomNode} from '../model';
import {DataLoaderError} from './data-loader-error';

@Injectable()
export class DataLoader {
    
    constructor(private http: Http) {
    }
    
    requestDomNode(queryUrl: string): Observable<DomNode> {
        return this.http.get(queryUrl)
                   .catch(
                       error => Observable.throw(new DataLoaderError(`Can't achieve this url: ${queryUrl}`,
                                                                     error)))
                   .map((response: Response): DomNode => {
                       return response.json();
                   })
                   .catch(
                       error => Observable.throw(new DataLoaderError(`Can't parse received response`,
                                                                     error)));
        
    }
}
