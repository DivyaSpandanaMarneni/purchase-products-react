import {IItem} from "./IItem";



export type IFilterCriteria = {
    searchKey: String;
    category: String;
    priceRange: null;
    savings: String;
    sortBy: String;
    pageIndex: number;
    pageSize: number;
}

export interface IItems {
    products: IItem[];
    filterCriteria: IFilterCriteria;
    currentPage: number;
    productCount: number;

}