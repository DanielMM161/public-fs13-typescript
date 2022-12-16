import { Category } from "./category";
import { Entity } from "./common";

export interface Product extends Entity {
    title: string,
    price: number,
    description: string,
    category: Category,
    images: string[]
}