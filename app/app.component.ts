//import angular core
import { Component } from '@angular/core';
//Decorator
@Component({
  selector: 'my-app',
  template: `
    <div><h1>{{pageTitle}}</h1></div>
    <pm-products></pm-products>
    `,
})
//Angular Component
export class AppComponent  { 
  pageTitle:string ='Product Management';
 
}