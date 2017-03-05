import {Injectable } from '@angular/core';
//used for http and response
import { Http, Response } from '@angular/http';
//used for observable
import { Observable } from 'rxjs/Observable';
// used for do operator
import 'rxjs/add/operator/do';
// used for catch operator
import 'rxjs/add/operator/catch';
//Used for map operator. This loads the operator without importing
import 'rxjs/add/operator/map';

import { ICompany } from './company';

@Injectable()
export class CompanyService{
    //we need to change it to the actual web server
    private _companyUrl='http://localhost:5000/api/companys'
    //constructor
    constructor(private _http:Http){}

    getCompanies(): Observable<ICompany[]> {
        return this._http.get(this._companyUrl)
                       // when we get the response we use the map operator
                        .map((response: Response) => <ICompany[]> response.json())
                        // allows us to peak the data returned from the server without disrupting the flow
                        .do(data => console.log('All: ' +  JSON.stringify(data)))
                        .catch(this.handleError);
    }
    //method to handle error
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }           

}