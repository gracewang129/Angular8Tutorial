import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: ProductsService, private fb: FormBuilder) {
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
        this.ps.editProduct(params.id).subscribe(res => {
          this.product = res;
      });
    });
  }

  updateProduct(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees, id) {
    this.route.params.subscribe(params => {
      this.ps.updateProduct(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees, params.id);
      this.router.navigate(['products']);
    });
  }
}
