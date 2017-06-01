//Import angular core 
import {Component} from '@angular/core';
//Define metaData
@Component({
    templateUrl:'app/css/float/float.component.html',
    styleUrls:['app/css/float/float.component.css']
  
})
//export a class
export class FloatComponent{
    cssId:String;
    cssName:String;
    csslib:any[]=[
    { "pid":1,
      "details":"desc"
    },
    { "pid":2,
      "details":"desc"
    }
    ]

}   

