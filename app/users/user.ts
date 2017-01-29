export interface IUser  { 
  firstName :string;
  lastName :string;
  MI:string;
  DOB:string;
  address:address;
  hobbies:string []; 
  showhobbies:boolean; 
}
interface address{
                    Street:string,
                    City:string,
                    State:string
}