import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {

  private imgsrc = "../assets/default.png";
  constructor() { }

  @Input() thisCustomer: Customer ;

  
  ngOnInit() {
    if(this.thisCustomer.customerPicture != null){
      this.imgsrc = this.thisCustomer.customerPicture;
    }
  }

}
