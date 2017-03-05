import {Component, OnInit} from '@angular/core';
//Import interface
import {IUser} from './user';

@Component({
    templateUrl: 'app/users/user-list.component.html',
    styleUrls:['app/users/user-list.component.css']
})
//Angular Component
export class UserComponent  { 
  firstName :string;
  lastName :string;
  MI:string;
   
  //Constructor
    constructor(){
    this.firstName = '';
    this.lastName="";
    this.MI="";
     }
  addUsers(){
    console.log(event);
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.MI);
  }
 }

