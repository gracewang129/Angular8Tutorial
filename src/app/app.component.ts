import { Component , OnInit} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';
import Customer from './Customer';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8tutorial';
  customers: Customer[];
  constructor(private loadingBar: SlimLoadingBarService, private router: Router, private ps: CustomersService) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  ngOnInit() {
    this.ps
      .getCustomers()
      .subscribe((data: Customer[]) => {
        this.customers = data;
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }



  showTopFour() {
    const topfour = true;
    console.log("showtopfour");
  }

}
