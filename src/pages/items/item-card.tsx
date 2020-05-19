import * as React from "react";
import {Component} from "react";
import {IItem} from "../../model/IItem";
import "./item-card.scss";

export type ItemCardProperties = {
    itemDetails: IItem;
}

export class ItemCard extends Component<ItemCardProperties, any>{
    constructor(props: ItemCardProperties) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={"item-card-style"}>
               <div className={"img-section-style"}>
                   <a className={"newWindow"} href={""}>
                       <img src={this.props.itemDetails.imageLink} alt={"image"} className={"img-style"}></img>
                   </a>
               </div>
                <div className={"desc-section-style"}>
                    <span>{this.props.itemDetails.productName}</span>

                </div>
                <div className={"price-section"}>
                    <span>Org.Price {this.props.itemDetails.orgPrice}</span>
                    <span>Sale Price {this.props.itemDetails.salePrice}</span>
                </div>
                <div></div>
                <div></div>
            </div>
        );
    }
}