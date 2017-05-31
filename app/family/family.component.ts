//Import angular core 
import {Component} from '@angular/core';
//Define metaData
@Component({
    templateUrl:'app/family/family.component.html',
    styleUrls:['app/family/family.component.css']
  
})
//export a class
export class familyComponent{
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

