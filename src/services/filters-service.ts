import {IFilterCriteria, IItems} from "../model/IItems";

export class FiltersService {


    public static async getFilterCategories(filterCriteria: IFilterCriteria): Promise<IItems> {
        
        return fetch('http://doc-aks-ingress.eastus.cloudapp.azure.com:8082/doc/products', {
            method: 'post',
            body: JSON.stringify(filterCriteria),
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        })
            .then(res => res.json())
            .then((data: IItems) => {
                return data;
            })
            .catch(error =>  error)

    }

    public static async getItemsDefault(): Promise<IItems> {

        return fetch('http://doc-aks-ingress.eastus.cloudapp.azure.com:8082/doc/products', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        })
            .then(res => res.json())
            .then((data: IItems) => {
                return data;
            })
            .catch(error =>  error)
    }


}