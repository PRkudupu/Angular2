//import angular core
import { Component } from '@angular/core';
//import product service
import { ProductService } from './products/product.service';
//Decorator
//In Providers property we specify the service
@Component({
  selector: 'my-app',
  template: `
    <div><h1>{{pageTitle}}</h1></div>
    <pm-products></pm-products>
    `,
  providers:[ProductService]
})
//Angular Component
export class AppComponent  { 
  pageTitle:string ='Product Management';
 
}