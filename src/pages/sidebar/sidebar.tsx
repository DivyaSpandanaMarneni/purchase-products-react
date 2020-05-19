import * as React from "react";
import {Component} from "react";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./sidebar.scss";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

// type SidebarProperties = {
//
// }

type SidebarState = {
    openMenu: boolean;

}


export class Sidebar extends Component<any, SidebarState> {

    constructor(props: any) {
        super(props);
        this.state = {
            openMenu: false
        }
    }

    toggleCollapse = () => {
        this.setState({openMenu: !this.state.openMenu} );
    }

    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>

                <Container className={"filter-container-style"}>
                        <Container>

                            <NavDropdown title={"Categories"} id={"nav-categories"}>
                                <ListGroup className={"list-style"}>
                                    <ListGroupItem action>Men</ListGroupItem>
                                    <ListGroupItem action>Women</ListGroupItem>
                                    <ListGroupItem action>Kids</ListGroupItem>
                                </ListGroup>
                            </NavDropdown>

                        </Container>

                        <Container>
                            <NavDropdown title={"Price Range"} id={"nav-categories"}>
                                <ListGroup className={"list-style"}>
                                    <ListGroupItem action>0-100</ListGroupItem>
                                    <ListGroupItem action>101-200</ListGroupItem>
                                    <ListGroupItem action>201-300</ListGroupItem>
                                </ListGroup>
                            </NavDropdown>
                        </Container>

                        <Container>
                            <NavDropdown title={"Discount"} id={"nav-categories"}>
                                <ListGroupItem>Men</ListGroupItem>
                                <ListGroupItem>Women</ListGroupItem>
                                <ListGroupItem>Kids</ListGroupItem>
                            </NavDropdown>
                        </Container>



                </Container>

                <ListGroup>

                </ListGroup>

            </div>
        );
    }
}