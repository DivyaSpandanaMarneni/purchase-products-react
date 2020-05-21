import * as React from "react";
import {Component} from "react";
import "./items.scss";
import {ItemCard} from "./item-card";
import { IItems} from "../../model/IItems";
import {IItem} from "../../model/IItem";
import Badge from "react-bootstrap/Badge";

export type IItemsProps = {
    items: IItems;
    filters: string[];
}

export type ItemsInfoState = {
    items: IItems,
    itemsLoading: boolean
}

export default class ItemsComponent extends Component<IItemsProps, ItemsInfoState> {
    map: Map<number, string> = new Map<number, string>();
    constructor(props:IItemsProps) {
        super(props);
        this.state = {
            items: this.props.items,
            itemsLoading: true
        }


        this.map.set(0, "Men");
        this.map.set(1, "Women");
        this.map.set(2, "Kids");
        this.map.set(3, "Shoes");
        this.map.set(4, "Handbags");
        this.map.set(5, "Beauty");
        this.map.set(6, "Juniors");
        this.map.set(7, "Accessories");

    }

    componentDidMount() {
    }



    render() {

        return (
            <div className={"items-wrapper"}>
                <div className={"filter-area"}>
                    {this.props.filters.map(value => (

                        <h4><Badge>{typeof value === 'number' ? this.map.get(value) : value }</Badge></h4>
                    ))
                    }
                </div>
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