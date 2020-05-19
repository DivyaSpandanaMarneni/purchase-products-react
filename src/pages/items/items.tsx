import * as React from "react";
import {Component} from "react";
import "./items.scss";

export class Items extends Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <div className={"items-wrapper"}>
                <div className={"display-style"}>
                    <div className={"product-card"}></div>
                    <div className={"product-card"}></div>
                    <div className={"product-card"}></div>
                    <div className={"product-card"}></div>
                    <div className={"product-card"}></div>
                    <div className={"product-card"}></div>
                    <div className={"product-card"}></div>
                    <div className={"product-card"}></div>
                    <div className={"product-card"}></div>
                    <div className={"product-card"}></div>
                </div>


            </div>
        );
    }
}