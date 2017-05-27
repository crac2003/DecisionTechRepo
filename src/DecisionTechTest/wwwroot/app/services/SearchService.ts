import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import { SearchRequest, Deal } from '../search/models/models';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    constructor(@Inject(Http) private http: Http) { }

    public search(request: SearchRequest): Observable<Deal[]> {
        let url = '/search';
        let params = [];
        if (request.types.length > 0) {
            for (var i = 0; i < request.types.length; i++) {
                params.push(`types=${request.types[i]}`);
            } 
        }

        if (request.speed) {
            params.push(`speed=${request.speed}`);
        }

        if (params.length > 0) {
            url += `?${params.join("&")}`;
        }

        return this.http.get(url)
            .map((x:Response) => x.json());
    }
}