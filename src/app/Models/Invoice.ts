import { InvoiceLine } from './InvoiceLine';
export class Invoice {
    invoiceId: number;
    customer: string;
    genDate: Date;
    amount: number;
    dueDate: Date;
    status: string;
    invoiceLines: InvoiceLine[];
    constructor()
{
    this.invoiceLines = [];
}

}