import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyDetailsService } from 'src/app/shared/company-details.service';

@Component({
  selector: 'app-company-details-form',
  templateUrl: './company-details-form.component.html',
  styleUrls: ['./company-details-form.component.css']
})
export class CompanyDetailsFormComponent implements OnInit {

  constructor(public service:CompanyDetailsService) { }

  ngOnInit(): void {
    this.service.GetClients().subscribe(d=>{this.service.listClients=d}),
    this.service.GetbillingTerm().subscribe(d=>{this.service.listbillingTerm=d}),
    this.service.GetinvoiceType().subscribe(d=>{this.service.listinvoiceType=d}),
    this.service.GetmatterType().subscribe(d=>{this.service.listmatterType=d})

  }

  onSubmit(form:NgForm)
  {
    if(this.service.CompanyDetailsForm.id==0)
    {
      this.Insert(form);
    }
    else
    {
      this.Update(form);
    }
  }

  Insert(form:NgForm)
  {
    form.value.invoiceable=Number(form.value.invoiceable);
    form.value.clientId=Number(form.value.clientId);
    form.value.matterTypeId=Number(form.value.matterTypeId);
    form.value.billingTermsId=Number(form.value.billingTermsId);
    form.value.invoiceTypeId=Number(form.value.invoiceTypeId);
      this.service.CompanyDetailsForm=form.value;
      this.service.InsertData().subscribe(d=>{
        this.service.GetAllData().subscribe(d=>this.service.listCompanyDetails=d),
        form.form.reset(),
        alert('data insert successfully')
      })

  }
  Update(form:NgForm)
  {
    form.value.invoiceable=Number(form.value.invoiceable);
    form.value.clientId=Number(form.value.clientId);
    form.value.matterTypeId=Number(form.value.matterTypeId);
    form.value.billingTermsId=Number(form.value.billingTermsId);
    form.value.invoiceTypeId=Number(form.value.invoiceTypeId);
      this.service.CompanyDetailsForm=form.value;
      this.service.UpdateData().subscribe(d=>{
        this.service.GetAllData().subscribe(d=>this.service.listCompanyDetails=d),
        form.form.reset(),
        alert('data Updated successfully')
      })

  }


}
