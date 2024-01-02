import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { CardComponentComponent } from '../components/card-component/card-component.component';
import { Card } from '../models/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ProductComponent,CardComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cardSimple';
  carts:Card[]=[{
    productId:1,
    count:5
  }]
  addCartItem(productId:number){
    let cart = this.carts.find(cart=>cart.productId==productId);
    if(cart==undefined){
      this.carts.push({productId:productId,count:1});
    }
    else{
      cart.count++;
    }
  }
  minusCartItem(productId:number){
    let cartIndex= this.carts.findIndex(cart=>cart.productId==productId)
    if(cartIndex!=-1){
      this.carts[cartIndex].count--;
      if(this.carts[cartIndex].count==0){
         this.carts.splice(cartIndex,1);
      }
    }
  }
}
