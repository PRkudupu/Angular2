import {Component, OnInit} from '@angular/core';
//Import interface
import {IUser} from './user';
import {User} from './Models/user.model';

@Component({
    templateUrl: 'app/users/user-list.component.html',
    styleUrls:['app/users/user-list.component.css']
})
//Angular Component
export class UserComponent  { 
  firstName :string;
  lastName :string;
 //Constructor
    constructor(){
    this.firstName = 'Prathap';
    this.lastName='Kudupu';
     }
   //New instance of user Model
   userModel=new User('Prathap','Kudupu')
  
    addUsers(){
    console.log(event);
    console.log(this.firstName);
    console.log(this.lastName);

  }
 }
