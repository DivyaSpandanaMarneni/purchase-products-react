import * as React from "react";
import {Component} from "react";
import "./title.css";

export class Title extends Component<any, any> {
    render() {
        return (
            <div className="title-wrapper">
                <div className="help-text">
                    <h4>HELP</h4>
                </div>
                <div className="signin-text">
                    <h4>SIGN IN</h4>
                </div>
            </div>
        )
    }

}