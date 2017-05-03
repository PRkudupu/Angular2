import { NgModule }      from '@angular/core';
//Browser module
import { BrowserModule } from '@angular/platform-browser';
//form module
import {FormsModule} from '@angular/forms'
//http module
import {HttpModule} from '@angular/http'
//Router module
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
//User component
import { UserComponent }  from './users/user-list.component';
//Product list component
import { ProductListComponent }  from './products/product-list.component';
//Product detail component
import { ProductDetailComponent }  from './products/product-detail.component';
//Product filter component
import { ProductFilterPipe }  from './products/product-filter.pipe';
//star component
import { StarComponent }  from './shared/star.component';
//Welcome component
import { WelcomeComponent }  from './home/welcome.component';
//Welcome component
import { CompanyListComponent }  from './company/company-list.component';
//Import form sampe component
import { formSampleComponent }  from './sample/formSample.Component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //specify route path
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'users', component: UserComponent },
      { path: 'company', component: CompanyListComponent },
      { path: 'sample', component: formSampleComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    StarComponent,
    UserComponent,
    CompanyListComponent,
    formSampleComponent
   
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
