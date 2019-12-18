import { Customer } from './Customer';
import { InvoiceLine } from './InvoiceLine';
export class Invoice {
    invoiceId: number;
    customer: Customer;
    createDate: Date;
    dueDate: Date;
    amount: number;
    paidStatus: boolean;
    invoiceLine: InvoiceLine[];

    constructor() {

     this.invoiceLine = [];
    }

}

