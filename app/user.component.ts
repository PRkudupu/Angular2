//import angular core
import { Component } from '@angular/core';
//Decorator
@Component({
  selector: 'user',
  template: `<h1>Simple Angular 2 template </h1>
  <p> <strong>First Name : </strong>{{firstName}} </p>
  <p> <strong>Last Name : </strong>{{lastName}} </p>
  <p> <strong>MI  : </strong>{{MI}}</p>
  <p> <strong>DOB : </strong>{{DOB}}</p>
  <p> <strong>address :  </strong>{{address.Street}} {{address.City}} {{address.State}} </p>
  <div *ngIf="showhobbies">
  <h2>hobbies</h2>
    <ul> 
        <li *ngFor="let hobby of hobbies">
        {{hobby}}
    </ul>
  </div>
  
      `,
})
//Angular Component
export class UserComponent  { 
  firstName :string;
  lastName :string;
  MI:string;
  DOB:string;
  address:address;
  hobbies:string []; 
  showhobbies:boolean; 
//Constructor
    constructor(){
    this.firstName = 'Prathap';
    this.lastName="Kudupu";
    this.MI="H";
    this.DOB="01/12/2000";
    this.address={
                    Street:"Vallco Pkwy",
                    City:"Cupertino",
                    State:"CA"
    };
    this.hobbies=['Music','Movies','Sports' ]
    this.showhobbies=false;
  }
}
//interface address{
interface address{
                    Street:string,
                    City:string,
                    State:string
}


