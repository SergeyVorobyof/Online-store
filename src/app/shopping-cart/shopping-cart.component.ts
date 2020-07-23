import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../_models';
import { UserService, GoodService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  user: User;

  constructor(private goodService: GoodService, private userService: UserService, private authenticationService:  AuthenticationService) {
     this.authenticationService.user.subscribe(x => this.user = x);   
  }

  showCart() {
      return this.user.shoppingCart.goods
  }

  ngOnInit(): void {
  }

  
}
