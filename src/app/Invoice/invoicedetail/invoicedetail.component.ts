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

  constructor(private service: InvoiceDetailService) { }

  invoicelines: InvoiceLine[] = [
    { invoiceId: 1, invoiceLineId: 1, description: 'plumbing', price: 2500, quantity: 1 },
    { invoiceId: 1, invoiceLineId: 2, description: 'electrical', price: 500, quantity: 1 },
    { invoiceId: 1, invoiceLineId: 3, description: 'regrigeration', price: 52500, quantity: 1 },

  ];


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

  ngOnInit() {
  }

}
