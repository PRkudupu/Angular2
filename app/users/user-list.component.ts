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
  firstName1 :string;
  lastName :string;
 //Constructor
    constructor(){
        this.firstName1="test"
    }
   //New instance of user Model
    languages=['English','Spanish','Other'];
    userModel=new User('Prathap','Kudupu',true,'w2','Spanish')
   isFullTime = false;
   MI="";
   sexType='';
   
    
   firstNameToUpperCase(value:string){
       //Check if the value exists
      if(value.length > 0)
      {
        //Fetch the first character and turn it into upper and leave the rest
        this.userModel.firstName=value.charAt(0).toUpperCase() + value.slice(1);

      }
      else
      {
          this.userModel.firstName=value;
      }
   }
    addUsers(){
  
  }
 }
