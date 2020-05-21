export interface ICategory {
    catId: number,
    catName: String
}


export interface IFilter {
    categories: ICategory[],
    discounts: Map<String, String>,
    priceRanges: Map<String, String>
}