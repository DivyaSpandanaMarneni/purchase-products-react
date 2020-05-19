import * as React from "react";
import {Component} from "react";
import "./title.scss";

export class Title extends Component<any, any> {
    render() {
        return (
            <div className="title-wrapper">
                <div className="help-text">
                    <h5>HELP</h5>
                </div>
                <div className="signin-text">
                    <h5>SIGN IN</h5>
                </div>
            </div>
        )
    }

}