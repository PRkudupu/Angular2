//import angular core
import { Component } from '@angular/core';
//Decorator
@Component({
  selector: 'user',
  template: `<h1>Simple Angular 2 template </h1>
  <p> <strong>First Name : </strong>{{Firstname}} </p>
  <p> <strong>Last Name : </strong>{{Lastname}} </p>
  <p> <strong>MI  : </strong>{{MI}}</p>
  <p> <strong>DOB : </strong>{{DOB}}</p>
  <p> <strong>Address :  </strong>{{Address.Street}} {{Address.City}} {{Address.State}} </p>
    `,
})
//Angular Component
export class UserComponent  { 
  Firstname = 'Prathap';
  Lastname="Kudupu";
  MI="H";
  DOB="01/12/2000";
  Address={
    Street:"Vallco Pkwy",
    City:"Cupertino",
    State:"CA"};
}
