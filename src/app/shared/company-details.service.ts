import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { billingTerm, Clients, CompanyDetails, invoiceType, matterType } from './company-details.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {

  constructor(private http:HttpClient) { }
  
  readonly CompanyDetailsbaseURL='https://localhost:44334/api/companydetails';
  readonly BillingTermsbaseURL='https://localhost:44334/api/BillingTerms';
  readonly ClientsbaseURL='https://localhost:44334/api/Clients';
  readonly InvoiceTypesbaseURL='https://localhost:44334/api/InvoiceTypes';
  readonly MatterTypesbaseURL='https://localhost:44334/api/MatterTypes';

  listCompanyDetails:CompanyDetails[]=[];
  listbillingTerm:billingTerm[]=[];
  listClients:Clients[]=[];
  listinvoiceType:invoiceType[]=[];
  listmatterType:matterType[]=[];

  CompanyDetailsForm:CompanyDetails = new CompanyDetails();


  GetAllData():Observable<CompanyDetails[]>
  {
      return this.http.get<CompanyDetails[]>(this.CompanyDetailsbaseURL);
  }

  GetbillingTerm():Observable<billingTerm[]>
  {
      return this.http.get<billingTerm[]>(this.BillingTermsbaseURL);
  }
  GetClients():Observable<Clients[]>
  {
      return this.http.get<Clients[]>(this.ClientsbaseURL);
  }
  
  GetinvoiceType():Observable<invoiceType[]>
  {
      return this.http.get<invoiceType[]>(this.InvoiceTypesbaseURL);
  }

  GetmatterType():Observable<matterType[]>
  {
      return this.http.get<matterType[]>(this.MatterTypesbaseURL);
  }




  InsertData()
  {
    return this.http.post(this.CompanyDetailsbaseURL,this.CompanyDetailsForm);
  }

  UpdateData()
  {
    return this.http.put(`${this.CompanyDetailsbaseURL}/${this.CompanyDetailsForm.id}`,this.CompanyDetailsForm);
  }

  DeleteData(id:number)
  {
    return this.http.delete(`${this.CompanyDetailsbaseURL}/${id}`);
  }




}
