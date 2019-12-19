import { User } from './User';
export class Customer {

    customerId: number;
    customerFirstname: string;
    customerLastname: string;
    customerAddress: string;
    customerEmail: string;
    customerCity: string;
    customerState: string;
    customerPhoneNumber: string;
    customerPicture: string;
    user: User;
    constructor() {
        this.user = new User();
    }

}
