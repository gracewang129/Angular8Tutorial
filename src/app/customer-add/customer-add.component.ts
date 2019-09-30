import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private customerService: CustomersService, private router: Router) {
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


  addCustomer(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees) {
    this.timeout(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees)
    .then((value) => {
        this.router.navigate(['']);
    });


  }
  timeout(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees){
    return new Promise((resolve, reject) => {

        this.customerService.addCustomer(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees);

      setTimeout(resolve, 100, "done");

    });
  }
  ngOnInit() {
  }

}
