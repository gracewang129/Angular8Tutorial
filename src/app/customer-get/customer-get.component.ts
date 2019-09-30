import { Component, OnInit } from '@angular/core';
import Customer from '../Customer';
import { CustomersService } from '../customers.service';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-customer-get',
  templateUrl: './customer-get.component.html',
  styleUrls: ['./customer-get.component.css']
})
export class CustomerGetComponent implements OnInit {

  customers: Customer[];
  constructor(private customerService: CustomersService, private apixuService: ApixuService) { }
  public weatherData: any;
  public barChartData = [
    {
      data: [],
      backgroundColor:['','','',''],
      hoverBackgroundColor:['','','',''],
      label: 'Rain'
    }];
  public barChartOptions = {
     scaleShowVerticalLines: false,
     responsive: true
   };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;


  public isLoaded = false;
  ngOnInit() {
    this.getCustomers().then(
      () => {
        //console.log("Task Complete! = " + this.customers);
        this.setUpCustomers();
      },
      () => console.log("Task Errored!"),
    );
  }
  getCustomers() {
  let promise = new Promise((resolve, reject) => {
    this.customerService.getCustomers()
      .toPromise()
      .then(
        (data: Customer[]) => { // Success
         this.customers = data;
         this.customers.sort((a,b) => b.NumberOfEmployees - a.NumberOfEmployees);

         console.log('this.customer = ' + this.customers);
          resolve();
        }
      );
  });
  return promise;
}
//initialize the weather component into the customer list.
  setUpCustomers() {
    for (let i = 0; i < this.customers.length; i++){
          //default the day of rain to be -1, meaning it's not going to rain.
          this.customers[i].DayofRain = -1;
          this.apixuService
            .getWeather(this.customers[i].Location)//this.customers.location
            .subscribe(data => {
            this.weatherData = data;
            //push the company name and number of employees into the dataset for the chart
            if (i < 5){
              this.barChartData[0].data.push(this.customers[i].NumberOfEmployees);
              this.barChartLabels.push(this.customers[i].CustomerName);
              //red if no rain
              this.barChartData[0].backgroundColor[i] = '#ff6384';
              this.barChartData[0].hoverBackgroundColor[i] = '#ffb3c3';
            }
            for ( let j = 0; j <= 5; j++){
              const day = this.weatherData.list[j];
              if (day.weather[0].main == 'Rain'){
                //console.log('rain');
                this.customers[i].DayofRain = j + 1;
                //blue if raining
                if (i < 4) {
                  this.barChartData[0].backgroundColor[i] = '#36a2eb';
                  this.barChartData[0].hoverBackgroundColor[i] = '#74bff1';
                }

                break; //the first date of rain should be recorded
              }
              else {

              }
            }
          });
        }
        console.log(this.barChartData);
        this.isLoaded = true;
  }
  // customer-get.component.ts

  deleteCustomer(id) {
    this.customerService.deleteCustomer(id).subscribe(res => {
      this.customers.splice(id, 1);
    });
  }
}
