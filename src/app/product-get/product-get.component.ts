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
  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
        //console.log('this.product = ' + this.products);
        for (let i = 0; i < this.products.length; i++){
          //default the day of rain to be -1, meaning it's not going to rain.
          this.products[i].DayofRain = -1;
          //console.log("location = " + this.products[i].Location);
          this.apixuService
            .getWeather(this.products[i].Location)//this.products.location
            .subscribe(data => {
            this.weatherData = data;
            console.log(this.weatherData);
            for ( let j = 0; j <= 5; j++){
              const day = this.weatherData.list[j];
              //console.log(day);

              console.log(day.weather[0].main);
              if (day.weather[0].main == 'Rain'){
                //console.log('rain');
                this.products[i].DayofRain = j;

              }
            }
          });
        }
    });


  }

  // product-get.component.ts

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
  }
}
