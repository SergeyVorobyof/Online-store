import {Cart} from '../_services';

export class User {
    id: number;
    shoppingCart: Cart;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    jwtToken?: string;
}