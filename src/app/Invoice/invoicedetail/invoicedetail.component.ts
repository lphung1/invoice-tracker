import { InvoiceService } from './../../service/invoice.service';
import { InvoiceDetailService } from '../../service/invoice-detail.service';
import { Invoice } from './../../Models/Invoice';
import { Component, OnInit, Input } from '@angular/core';
import { InvoiceLine } from './../../Models/InvoiceLine';
import { PDFJS } from 'pdfjs-dist';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-invoicedetail',
  templateUrl: './invoicedetail.component.html',
  styleUrls: ['./invoicedetail.component.css']
})
export class InvoicedetailComponent implements OnInit {

  @Input() invoice: Invoice;

  constructor(private service: InvoiceDetailService, private invService: InvoiceService) { }

  invoicelines: InvoiceLine[];


  inv = this.service.getInvoice();



  getPDF() {

    var data = document.getElementById('pdfContent');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('Invoice.pdf'); // Generated PDF
    });


  }

  calcTotal(inv: Invoice): number{
    //console.log("calc total var" + inv.invoiceLine);
    let sum = 0;
    let i = inv.invoiceLine;
    i.forEach(element => {
      //console.log("element price for invoice line and quanitty " + element.cost + " " + element.quantity );
      //console.log("q * cost " + element.cost * element.quantity);
      sum = sum + (element.cost * element.quantity);
    });
    //console.log("sum " + sum);
    return sum;

  }

  ngOnInit() {
    this.invoicelines = this.invService.getDetailInvoice().invoiceLine;
  }

}
