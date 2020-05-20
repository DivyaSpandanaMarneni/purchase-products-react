import {IFilterCriteria, IItems} from "../model/IItems";

export class FiltersService {


    public static async getFilterCategories(filterCriteria: IFilterCriteria): Promise<IItems> {

        return fetch('http://doc-aks-ingress.eastus.cloudapp.azure.com:8082/doc/products', {
            method: 'post',
            body: JSON.stringify(filterCriteria)
        })
            .then(res => res.json())
            .then((data: IItems) => {
                console.log("items data count from service with filter criteria", data.productCount);
                return data;
            })
            .catch(error =>  error)

    }

    public static async getItemsDefault(): Promise<IItems> {

        return fetch('http://doc-aks-ingress.eastus.cloudapp.azure.com:8082/doc/products')
            .then(res => res.json())
            .then((data: IItems) => {
                console.log("items data count from service", data.productCount);
                return data;
            })
            .catch(error =>  error)
    }


}