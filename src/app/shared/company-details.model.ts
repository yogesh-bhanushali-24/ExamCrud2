export class CompanyDetails {
    id:number=0;
    clientId:number=0;
    clientName:string='';
    projectName:string='';
    matterTypeId:number=0;
    matterTypeName:string='';
    billingTermsId:number=0;
    billingTermsName:string='';
    invoiceTypeId:number=0;
    invoiceTypeName:string='';
    description:string='';
    invoiceable:number=0;

}
export class billingTerm{
    id:number=0;
    billingTermsName:string='';
}
export class Clients{
    id:number=0;
    clientName:string='';
}
export class invoiceType{
    id:number=0;
    invoiceTypeName:string='';
}
export class matterType{
    id:number=0;
    matterTypeName:string='';
}




