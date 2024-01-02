import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products:Product[]=[];
  constructor(private httpClient:HttpClient){
  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.httpClient.get<Product[]>("/assets/products.json").subscribe(res =>{
      this.products=res;
    })
  }
}
