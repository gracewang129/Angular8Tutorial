import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  createEdit = true;

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProductsService) {
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

  addProduct(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees) {
    this.ps.addProduct(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees);

  }

  ngOnInit() {
  }

}
