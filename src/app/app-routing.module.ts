import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerGetComponent } from './customer-get/customer-get.component';
import { CustomerTopfourComponent } from './customer-topfour/customer-topfour.component';
const routes: Routes = [
  {
    path: '',
    component: CustomerGetComponent
  },
  {
    path: 'customer/create',
    component: CustomerAddComponent
  },
  {
    path: 'edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'top-four-customers',
    component: CustomerTopfourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
