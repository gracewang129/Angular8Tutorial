import { Component, OnInit } from '@angular/core';
import Product from '../Product';
import { ProductsService } from '../products.service';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: Product[];
  constructor(private ps: ProductsService, private apixuService: ApixuService) { }
  public weatherData: any;
  public barChartData: barChartData[] = [
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
  public barChartLabels: barChartLabels[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;


  public isLoaded = false;
  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
        this.products.sort((a,b) => b.NumberOfEmployees - a.NumberOfEmployees);

        //console.log('this.product = ' + this.products);
        for (let i = 0; i < this.products.length; i++){
          //default the day of rain to be -1, meaning it's not going to rain.
          this.products[i].DayofRain = -1;
          this.apixuService
            .getWeather(this.products[i].Location)//this.products.location
            .subscribe(data => {
            this.weatherData = data;
            //push the company name and number of employees into the dataset for the chart
            if (i < 4){
              this.barChartData[0].data.push(this.products[i].NumberOfEmployees);
              this.barChartLabels.push(this.products[i].CustomerName);
            }
            for ( let j = 0; j <= 5; j++){
              const day = this.weatherData.list[j];
              if (day.weather[0].main == 'Rain'){
                //console.log('rain');
                this.products[i].DayofRain = j + 1;
                //blue if raining
                this.barChartData[0].backgroundColor[i] = '#36a2eb';
                this.barChartData[0].hoverBackgroundColor[i] = '#74bff1';
                break; //the first date of rain should be recorded
              }
              else {
                //red if no rain
                this.barChartData[0].backgroundColor[i] = '#ff6384';
                this.barChartData[0].hoverBackgroundColor[i] = '#ffb3c3';
              }
            }
          });
        }
        console.log(this.barChartData);
        this.isLoaded = true;
    });


  }

  // product-get.component.ts

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
  }
}
