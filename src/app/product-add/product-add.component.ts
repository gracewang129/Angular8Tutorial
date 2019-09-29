import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProductsService, private router: Router) {
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
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
