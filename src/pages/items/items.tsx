import * as React from "react";
import {Component} from "react";
import "./items.scss";
import {ItemCard} from "./item-card";
import { IItems} from "../../model/IItems";
import {IItem} from "../../model/IItem";



export type ItemsInfoState = {
    items: IItems,
    itemsLoading: boolean
}

export default class ItemsComponent extends Component<any, ItemsInfoState> {
    constructor(props:any) {
        super(props);
        this.state = {
            items: {
                products: [],
                filterCriteria: null,
                productCount: 0,
                currentPage: 0
            },
            itemsLoading: true
        }
    }

    componentDidMount() {

        fetch('http://104.45.189.171:8082/doc/products')
            .then(res => res.json())
            .then((data: IItems) => {
                console.log("items data count ", data.productCount);
                console.log("items data ", data.filterCriteria);
                this.setState({ items: data, itemsLoading: false })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className={"items-wrapper"}>
                <div className={"display-style"}>
                    {
                        this.state.items.products.map((item: IItem, index: number) => {
                            return (
                                <div className={"product-card"}>
                                    <ItemCard itemDetails={item}></ItemCard>
                                </div>
                            )
                        })
                    }



                </div>


            </div>
        );
    }
}