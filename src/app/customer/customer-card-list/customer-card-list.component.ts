import { Customer } from './../../Models/Customer';
import { Component, OnInit } from '@angular/core';
import { SafeMethodCall } from '@angular/compiler';

@Component({
  selector: 'app-customer-card-list',
  templateUrl: './customer-card-list.component.html',
  styleUrls: ['./customer-card-list.component.css']
})
export class CustomerCardListComponent implements OnInit {

  constructor() { }

  customerList: Customer[];

  ngOnInit() {
  }

}
