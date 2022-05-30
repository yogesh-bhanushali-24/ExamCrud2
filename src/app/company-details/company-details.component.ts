import { Component, OnInit } from '@angular/core';
import { CompanyDetails } from '../shared/company-details.model';
import { CompanyDetailsService } from '../shared/company-details.service';
import { OrderPipe } from 'ngx-order-pipe';
import { filter } from 'rxjs';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  Searchname:any;
  constructor(public service:CompanyDetailsService, private orderPipe: OrderPipe) {
    // this.orderPipe.transform(service.listCompanyDetails, 'clientName');
   }

  ngOnInit(): void {
    this.service.GetAllData().subscribe(d=>{
      


      this.service.listCompanyDetails=d
    
    });
  }

  onDelete(id:number)
  {
    if(confirm('Are You Sure Want to Delete ?'))
    {
      this.service.DeleteData(id).subscribe(d=>{
        this.service.GetAllData().subscribe(d=>{this.service.listCompanyDetails=d});
      })
    }
    
  }

  populateForm(SelectedCompanyDetails:CompanyDetails)
  {
      this.service.CompanyDetailsForm=Object.assign({},SelectedCompanyDetails);
  }


  Search()
  {
    if(this.Searchname==''){
      this.ngOnInit()
    }
    else
    {
      this.service.listCompanyDetails=this.service.listCompanyDetails.filter(res=>
      {
          return res.clientName.toLocaleLowerCase().match(this.Searchname.toLocaleLowerCase())||res.billingTermsName.toLocaleLowerCase().match(this.Searchname.toLocaleLowerCase())
          ||res.invoiceTypeName.toLocaleLowerCase().match(this.Searchname.toLocaleLowerCase());
      })
    }
  }




  key:string='clientName';
  reverse:boolean=false;
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;

  }








}
