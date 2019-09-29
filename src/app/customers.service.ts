import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  uri = 'http://localhost:4000/customers';

  constructor(private http: HttpClient) { }

  addCustomer(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees) {
    console.log(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees);
    const obj = {
      CustomerName,
      PersonOfContact,
      PhoneNumber,
      Location,
      NumberOfEmployees
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getCustomers() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editCustomer(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateCustomer(CustomerName, PersonOfContact, PhoneNumber, Location, NumberOfEmployees, id) {
    const obj = {
      CustomerName,
      PersonOfContact,
      PhoneNumber,
      Location,
      NumberOfEmployees
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteCustomer(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
