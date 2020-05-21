import * as React from "react";
import {Component} from "react";
import {IItem} from "../../model/IItem";
import "./item-card.scss";

export type ItemCardProperties = {
    itemDetails: IItem;
}

export class ItemCard extends Component<ItemCardProperties, any>{

    componentDidMount() {
    }

    render() {
        return (
            <div className={"item-card-style"}>
               <div className={"img-section-style"}>
                   <a className={"newWindow"} href={this.props.itemDetails.productLink}>
                       <img src={this.props.itemDetails.imageLink} alt={"Display not available"} className={"img-style"}></img>
                   </a>
                   <div className={"savings-on-img-style"}>
                       <div className={"savings-text-style"}>Savings: </div>
                       <div className={"discount-style"}>{this.props.itemDetails.savings}% OFF</div>
                   </div>
               </div>
                <div className={"desc-section-style"}>
                    <span>{this.props.itemDetails.productName}</span>
                    <div className={"price-section"}>
                        <h6 className={"org-price-style"}>Org.Price ${this.props.itemDetails.orgPrice}</h6>
                        <h6 className={"sale-price-style"}>Sale Price ${this.props.itemDetails.salePrice}</h6>
                    </div>

                </div>

                <div></div>
                <div></div>
            </div>
        );
    }
}