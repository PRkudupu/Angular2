import {Component, OnInit} from '@angular/core';
//Import interface
import {IUser} from './user';
//Import service


@Component({
    templateUrl: 'app/users/user-list.component.html'
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
interface address{
                    Street:string,
                    City:string,
                    State:string
}