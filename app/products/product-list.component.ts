import {Component, OnInit} from '@angular/core';
//Import interface
import {IProduct} from './product';
//view for the component
import { ProductService } from './product.service';
@Component({
    selector:'pm-products',
    templateUrl:'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']

})
//class
export class ProductListComponent implements OnInit{
     pageTitle:string='Product List';
     imageWidth:number=50;
     imageMargin:number=2;
     showImage:boolean=false;
     listFilter:string;
     products:IProduct[];
 constructor(private _productService:ProductService){

 }
 //functions
 toggleImage():void{
     this.showImage=!this.showImage;
 }
 //ngOnInit
 ngOnInit():void {
     console.log('In OnInit');
     this.products=this._productService.getProducts()
 }
onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}