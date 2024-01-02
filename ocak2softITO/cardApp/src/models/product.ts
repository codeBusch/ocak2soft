import { ProductImage } from "./product-image";

export interface Product{
    id:number;
    categoryId:number;
    name:string;
    price:number;
    imageUrl:ProductImage;
    description:string;
    createdDate:string;
    isActive:boolean;
}

/*
HAYAT BITTI
minimum medium large
*/