import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//form module
import {FormsModule} from '@angular/forms'

import { AppComponent }  from './app.component';
import { UserComponent }  from './user.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductFilterPipe }  from './products/product-filter.pipe';
import { StarComponent }  from './shared/star.component';


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent , 
                  UserComponent,
                  ProductListComponent,
                  ProductFilterPipe,
                  StarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
