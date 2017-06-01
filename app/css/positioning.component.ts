//Import angular core 
import {Component} from '@angular/core';
//Define metaData
@Component({
    templateUrl:'app/css/positioning.component.html',
    styleUrls:['app/css/positioning.component.css']
  
})
//export a class
export class PositioningComponent{
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

