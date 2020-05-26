import * as React from "react";
import {Component} from "react";
import "./header.scss";
import {Title} from "./title/title";

export class Header extends Component<any, any> {
    render() {
        return (
            <div className="header-wrapper">
                <div><Title></Title></div>
                <div className="header-style">
                </div>
            </div>
        );
    }
}