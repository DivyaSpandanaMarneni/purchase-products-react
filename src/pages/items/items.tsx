import * as React from "react";
import {Component} from "react";
import "./items.scss";
import {ItemCard} from "./item-card";
import { IItems} from "../../model/IItems";
import {IItem} from "../../model/IItem";

export type IItemsProps = {
    items: IItems;
    // paging info optional
}

export type ItemsInfoState = {
    items: IItems,
    itemsLoading: boolean
}

export default class ItemsComponent extends Component<IItemsProps, ItemsInfoState> {
    constructor(props:IItemsProps) {
        super(props);
        this.state = {
            items: this.props.items,
            itemsLoading: true
        }

    }

    componentDidMount() {
    }



    render() {
        if (this.state.items && this.state.items.products)
        console.log("rendering inside items ", this.state.items.products.length, " ", this.props.items.products.length);
        return (
            <div className={"items-wrapper"}>
                <div className={"display-style"}>
                    {
                        this.props.items && this.props.items.products ?
                        this.props.items.products.map((item: IItem, index: number) => {
                            return (
                                <div className={"product-card"}>
                                    <ItemCard itemDetails={item}></ItemCard>
                                </div>
                            )
                        }) : <div>items not available</div>
                    }



                </div>


            </div>
        );
    }
}