import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerGetComponent } from './customer-get/customer-get.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomersService } from './customers.service';
import { ApixuService } from "./apixu.service";

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerGetComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [CustomersService, ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
