import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { AuthenticationService, Cart, Good, UserService } from './_services';
import { ErrorInterceptor } from './_helpers';
import { User } from './_models';
import { Injectable, Output } from '@angular/core';
import { NavigationEnd,  Router } from '@angular/router';

export interface MyUser {
	id: number
	name: string
	shoppingCart: Cart
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-app';

  //public users: MyUser[] = [
  //    {id: 1, name: 'Yosya', shoppingCart: {goods: [] }},
  //    {id: 2, name: 'Petya', shoppingCart: {goods: [] }}
  //]

    user: User;
    //authUsersUpdated: User[] = [];

    //loading: false;
    //users: User[];

    constructor(private authenticationService: AuthenticationService, public userService: UserService) {
      


        //window.location.reload();
        this.authenticationService.user.subscribe(x => this.user = x);
        
        if (this.user) {
            this.userService.addAuthenticated(this.user);
        }
    }


    //console.log(this.userService.authenticatedUsers, this.userService.authenticatedUsers.length);


    logout() {
        this.authenticationService.logout();
    }

    showCart() {
        //if (this.user.shoppingCart.goods.length == 0) {
        //    console.log('Empty');
        //}
        //console.log(this.user.shoppingCart.goods);
        console.log(this.userService.authenticatedUsers, this.userService.authenticatedUsers.length);
    }
}
