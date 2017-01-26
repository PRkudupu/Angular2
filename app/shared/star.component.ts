import  {Component} from '@angular/core';
@Component({
selector:'ai-star',
templateUrl:'app/shared/star.component.html',
styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
 rating:number=4;
 startswidth:number;

 ngOnChanges(): void {
     this.startswidth=this.rating * 86/5;
 }
}
