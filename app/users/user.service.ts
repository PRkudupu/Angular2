import {Injectable } from '@angular/core';
//used for http and response
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//used for observable
import { Observable } from 'rxjs/Observable';
// used for do operator
import 'rxjs/add/operator/do';
// used for catch operator
import 'rxjs/add/operator/catch';
//Used for map operator. This loads the operator without importing
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { IUser } from './user';

@Injectable()
export class UserService {
       //we need to change it to the actual web server
    private baseUrl='http://localhost:5000/api/users'
    
    //constructor
    constructor(private _http:Http){}
    //Pass the new users into the product 
    addUsers(user:IUser): Observable<IUser> {
    //Prepare the headers and the options
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(this.baseUrl,user,options)
                       // when we get the response we use the map operator
                        .map(this.extractData)
                        // allows us to peak the data returned from the server without disrupting the flow
                         .do(data => console.log('createUsers: ' + JSON.stringify(data)))
                        .catch(this.handleError);
    }
    //method to handle error
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }           

}