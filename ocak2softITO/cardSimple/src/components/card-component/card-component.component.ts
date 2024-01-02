import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss'
})
export class CardComponentComponent {
  @Input() carts:Card[]=[];


  getTotal():number{
    let total=0;
    this.carts.map(cart=>cart.count).forEach(count =>{
      total+=count;
    })
    return total;
  }
}
