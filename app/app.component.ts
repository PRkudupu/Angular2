//import angular core
import { Component } from '@angular/core';
//import product service
import { ProductService } from './products/product.service';
//Decorator
//In Providers property we specify the service
@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-inverse'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                    <li><a [routerLink]="['/users']">Users</a></li>
                    <li><a [routerLink]="['/company']">Companies</a></li>
                    <li><a [routerLink]="['/css']">Positioning</a></li>
                    <li><a [routerLink]="['/sample']">Form Sample</a></li>
                    <li><a [routerLink]="['/lifeCycle']">Life Cycle</a></li>
                    <li><a [routerLink]="['/family']">Family</a></li>
                 </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    providers: [ ProductService ]
})
//Angular Component
export class AppComponent  { 
  pageTitle:string ='Product Management';
 
}