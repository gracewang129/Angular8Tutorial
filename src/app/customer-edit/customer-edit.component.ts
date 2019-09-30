import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  angForm: FormGroup;
  customer: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomersService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
      this.angForm = this.fb.group({
        CustomerName: ['', Validators.required ],
        PersonOfContact: ['', Validators.required ],
        PhoneNumber: ['number', Validators.required ],
        Location: ['', Validators.required ],
        NumberOfEmployees: ['number', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.customerService.editCustomer(params.id).subscribe(res => {
          this.customer = res;
      });
    });
  }

  updateCustomer(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees, id) {
    this.timeout(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees, id)
    .then((value) => {
        this.router.navigate(['']);
    });


  }
  timeout(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees, id){
    return new Promise((resolve, reject) => {
      this.route.params.subscribe(params => {
        this.customerService.updateCustomer(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees, params.id);
      });
      setTimeout(resolve, 100, "done");

    });
  }
}
