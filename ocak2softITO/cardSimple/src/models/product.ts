import { Category } from "./category";

export interface Product{
    id:number;
    categoryId:number;
    title:string;
    price:number;
    tags:string[];
    imageUrl:string;

}
export interface ProductWithCategoryDTO extends Product{
    category:Category;
    
}