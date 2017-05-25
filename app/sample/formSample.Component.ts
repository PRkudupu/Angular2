import { Component } from '@angular/core';

//Decorator
@Component({
    selector:'formsample',
    templateUrl:'app/sample/formSample.Component.html'
             
})
//Create angular Component
export class formSampleComponent {
    firstName:string;
    lastName:string;
    constructor()
    {
        this.firstName="Prathap",
        this.lastName="Kudupu"
    }
    
    
}