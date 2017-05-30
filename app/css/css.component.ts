//Import angular core 
import {Component} from '@angular/core';
//Define metaData
@Component({
    templateUrl:'app/css/css.component.html',
    styleUrls:['app/css/css.component.css']
  
})
//export a class
export class CSSComponent{
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

