import {Component ,Input,SimpleChanges, OnInit, OnDestroy, OnChanges} from '@angular/core';

@Component({
selector:"lifehook",
templateUrl:"app/lifeCycle/lifeCycle.component.html"

})
//If we need to use life cycle event then we need to use interface
export class lifeCycleComponent implements OnInit,OnDestroy,OnChanges{
//define the properties
         firstName:string;
@Input() lastName:string;

constructor(){
        }
//Implement the interface
 ngOnInit():void{
     alert("ngOnInitCalled.");
     this.firstName="Prathap";
     this.lastName="Kudupu";
 }
ngOnDestroy():void{
    alert("On Destroy.");
}
ngOnChanges(changes:SimpleChanges):void{
    alert(changes+"On changes");
}
}

