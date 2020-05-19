import * as React from "react";
import {Component} from "react";
import "./header.css";
import {Title} from "./title/title";

export class Header extends Component<any, any> {
    render() {
        return (
            <div className="header-wrapper">
                <div><Title></Title></div>
                <div className="header-style">
                    <h1>DoC</h1>

                </div>
            </div>
        );
    }
}