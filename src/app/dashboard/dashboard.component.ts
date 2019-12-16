import { InvoiceService } from './../invoice.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('moveUp', [
      state('void', style({
        // Add the CSS for the hidden state here. Here is 2 examples (camelCase for properties of more than 1 word)
        height: '0',
        borderBottom: 'none'
      })),
      state('*', style({
        // Here, add the CSS of the visible state. You can use the * wildcard to tell Angular 'calculate the value of the height for me'
        height: '*',
        borderBottom: '*'
      })),
      // animate format: 'DURATION [DELAY] EASING-FUNCTION'
      transition(':enter', animate('275ms ease-out')),
      transition(':leave', animate('275ms 275ms ease-in'))
    ])
  ]
})
export class DashboardComponent implements OnInit {


  
  

  constructor(private service: InvoiceService) { }

  ngOnInit() {

    console.log(this.service.getAllInvoice().subscribe(foos => console.log(foos)));

  }

  public recentInvoiceTable(){

    

  }

}
