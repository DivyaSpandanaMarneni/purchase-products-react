import {IItem} from "./IItem";



export interface IFilterCriteria {
    searchKey: string; // text from product name
    category:number;
    priceRange: string;
    savings: string;
    sortBy: string; // price and savings
    pageIndex: number;
    pageSize: number;
}

export interface IItems {
    products: IItem[];
    filterCriteria: IFilterCriteria;
    currentPage: number;
    productCount: number;

}

export enum FilterType {
    PRICERANGE = "priceRange",
    DISCOUNTS = "savings",
    CATEGORY = "category"
}