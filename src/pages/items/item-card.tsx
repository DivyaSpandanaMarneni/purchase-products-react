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
                   <div className={"savings-on-img-style"}>
                       <div>Savings: </div>
                       <div>{this.props.itemDetails.savings}% OFF</div>
                   </div>
               </div>
                <div className={"desc-section-style"}>
                    <span>{this.props.itemDetails.productName}</span>
                    <div className={"price-section"}>
                        <h6>Org.Price {this.props.itemDetails.orgPrice}</h6>
                        <h6>Sale Price {this.props.itemDetails.salePrice}</h6>
                    </div>

                </div>

                <div></div>
                <div></div>
            </div>
        );
    }
}