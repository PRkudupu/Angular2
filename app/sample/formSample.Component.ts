import { Component } from '@angular/core';

//Decorator
@Component({
    selector:'formsample',
    template:` <h1>Sample</h1>
             <p>First Name {{firstName}}</p>
             <p>Last Name {{lastName}}</p>
             `,
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