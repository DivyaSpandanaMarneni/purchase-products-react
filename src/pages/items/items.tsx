import * as React from "react";
import {Component} from "react";
import "./items.scss";
import {ItemCard} from "./item-card";
import { IItems} from "../../model/IItems";
import {IItem} from "../../model/IItem";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export type IItemsProps = {
    items: IItems;
    filters: string[];
    itemsTotal: number;
    clearFilter: () => void;

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


        this.map.set(1, "Men");
        this.map.set(2, "Women");
        this.map.set(3, "Kids");
        this.map.set(4, "Shoes");
        this.map.set(5, "Handbags");
        this.map.set(6, "Beauty");
        this.map.set(7, "Juniors");
        this.map.set(8, "Accessories");

    }

    componentDidMount() {
    }

    clearChips = () => {
        this.props.clearFilter();
    }



    render() {

        return (
            <div className={"items-wrapper"}>
                <div className={"filter-area"}>
                    <div><h6>Showing {this.props.itemsTotal} items</h6></div>
                    <div className={"chips-style"}>

                        {this.props.filters.map(value => (

                            <h4><Badge>{typeof value === 'number' ? this.map.get(value) : value }</Badge></h4>
                        ))
                        }
                    </div>



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
                        }) : <div className={"embed-card-style"}>
                            <Card>
                                <Card.Body className={"card-style"}>
                                    <Card.Text>
                                        <h6>Items not available with the given filter</h6>
                                        <Button className={"button-style"} onClick={this.clearChips}>Load all</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                    }



                </div>


            </div>
        );
    }
}