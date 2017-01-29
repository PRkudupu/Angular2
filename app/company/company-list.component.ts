// import angular core module
import {Component,OnInit} from '@angular/core';
// import the interface
import {ICompany} from './company'
// import the service
import {CompanyService} from './company.service'
@Component({
 templateUrl:'app/company/company-list.component.html',
 providers:[CompanyService]
})
export class CompanyListComponent implements OnInit{
    companyId:number;
    companyName:string;
    location:string;
    companies:ICompany[];
    errorMessage:string;
    //Fetch the data in the constructor
    constructor(private _companyService:CompanyService){

    }
    
    ngOnInit():void {
        this._companyService.getCompanies()
        //subscribe to the observable
        .subscribe(companies=>this.companies=companies,
                   error =>this.errorMessage=<any>error);
 
    }
}