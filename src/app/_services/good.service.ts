import { Injectable } from '@angular/core';
import { User } from '../_models';
import { AuthenticationService } from '../_services';

export interface Good {
	id: number
	iconUrl: string
	title: string
	price: number
	category: string
	available: number
	date?: any
}

export interface Cart {
	goods: Good[]
}


@Injectable({ providedIn: 'root'})
export class GoodService {
    public goods: Good[] = [
      {id: 1, iconUrl: '../assets/good.jpg', title: 'Orange', price: 1, category:'fruits', available: 10, date: new Date()},
      {id: 2, iconUrl: '../assets/good.jpg', title: 'Tomato', price: 1, category:'vegetables', available: 5, date: new Date()},
      {id: 3, iconUrl: '../assets/good.jpg', title: 'Cucumber', price: 1, category:'vegetables', available: 1, date: new Date()},
    ] 
}