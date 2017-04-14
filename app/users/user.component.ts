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
  <button (click)=togglehobbies()>{{ showhobbies ? "Hide Hobbies":"Show hobbies"}}</button>
  <div *ngIf="showhobbies">
  <h2>hobbies</h2>
    <ul> 
        <li *ngFor="let hobby of hobbies">
        {{hobby}}
    </ul>
  </div>
  <br/>
    <label>First Name :</label><br/>
        <input type="text"  name="firstName" [(ngModel)]="firstName"/> <br/>
    <label>Last Name :</label><br/>
        <input type="text"  name="lastName" [(ngModel)]="lastName"/><br/>
    <label>MI :</label><br/>
        <input type="text"  name="MI" [(ngModel)]="MI"/><br/>
    <label>DOB :</label><br/>
        <input type="text"  name="DOB" [(ngModel)]="DOB"/><br/>
    <label>Address :</label><br/>
        <label>Street :</label><br/>
    <input type="text"  name="Street" [(ngModel)]="address.Street"/><br/>
        <label>City :</label><br/>
    <input type="text"  name="City" [(ngModel)]="address.City"/><br/>
        <label>State :</label><br/>
    <input type="text"  name="State" [(ngModel)]="address.State"/><br/>
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
  //functions
  togglehobbies(){
      if(this.showhobbies==true){
      this.showhobbies=false;}
      else{
      this.showhobbies=true;
      }
  }
}
//interface address{
interface address{
                    Street:string,
                    City:string,
                    State:string
}


