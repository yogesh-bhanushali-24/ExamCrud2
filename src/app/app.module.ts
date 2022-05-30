import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

import{ HttpClientModule } from '@angular/common/http';
import { CompanyDetailsFormComponent } from './company-details/company-details-form/company-details-form.component';
import { FormsModule } from '@angular/forms';
import{Ng2OrderModule}from'ng2-order-pipe';
import {Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';






@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    CompanyDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
