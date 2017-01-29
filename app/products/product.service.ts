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

import { IProduct } from './product';


@Injectable()
export class ProductService{
    //we need to change it to the actual web server
    private _productUrl='api/products/products.json'
    //constructor
    constructor(private _http:Http){}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
                       // when we get the response we use the map operator
                        .map((response: Response) => <IProduct[]> response.json())
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