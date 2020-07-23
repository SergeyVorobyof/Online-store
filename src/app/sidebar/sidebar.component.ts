import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Good, Cart, GoodService, UserService, AuthenticationService} from '../_services';
import { User } from '../_models';
import {MyUser} from '../app.component';
import { FormBuilder } from '@angular/forms';
import {Location} from '@angular/common'; 
import { ModalService } from '../good-addition';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  /////////
  bodyText: string;
  ////////
  goods: Good[] = []
  onToggle = new EventEmitter<number>()
  user: User

  checkoutForm;

  constructor(public goodService: GoodService, public userService: UserService, private authenticationService: AuthenticationService, private formBuilder: FormBuilder, private location: Location, private modalService: ModalService) {
      this.authenticationService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
      this.bodyText = 'This text can be updated in modal 1';
  }
  /////////////////
  openModalj(){
      document.getElementById('modal-1').style.display='block';
      document.body.classList.add('jw-modal-open');
  }

  closeModalj(){
      document.getElementById('modal-1').style.display='none';
      document.body.classList.remove('jw-modal-open');
  }

  
  ////////////////////////
  onChange(id: number) {
      this.onToggle.emit(id)
  }

  onRemove(id: number) {
      var ind: number = 0
      var tmp: number = 0
      for(tmp = 0; tmp < this.goodService.goods.length; ++tmp){
          if (this.goodService.goods[tmp].id === id){
              ind = tmp
          }
      }
      this.goodService.goods.splice(ind,1)
  }

  onAdd() {

      if (this.goodService.goods.length != 0){
          var newId: number = this.goodService.goods[this.goodService.goods.length - 1].id + 1
          if (this.goodService.goods[0].id != 1) {
              newId = 1
          }
      } else {
          var newId: number = 1
      }


      for (var i: number = 1; i < this.goodService.goods.length; ++i){
          if (this.goodService.goods[0].id != 1) {
              newId = 1
              break
          }
          if (this.goodService.goods[i].id - this.goodService.goods[i-1].id > 1 && this.goodService.goods[0].id == 1){
              newId = this.goodService.goods[i-1].id + 1
              break
          }
      }

      var newTask: Good = {id: newId, iconUrl: '../assets/good.jpg', title: 'Buy smth new', price: 1, category: 'vegetables', available: 1, date: new Date()}
      this.goodService.goods.splice(this.goodService.goods.length, 0, newTask)
      
      this.goodService.goods.sort(function(a,b){
          if (a.id > b.id) {
              return 1;
          }

          if (a.id < b.id) {
              return -1;
          }

          return 0
      })
  }

  addGoodToCart(good: Good){

      if (this.user.shoppingCart === undefined){
          var cart: Cart
          cart = { goods: [] }
          this.user.shoppingCart = cart
          this.user.shoppingCart.goods.splice(0,0,good)
          
      } else {
          this.user.shoppingCart.goods.splice(0,0,good)
      }
      
    }

}
