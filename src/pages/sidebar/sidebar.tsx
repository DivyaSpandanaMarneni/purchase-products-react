import * as React from "react";
import {Component} from "react";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./sidebar.scss";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import {ICategory, IFilter} from "../../model/IFilter"
import {FilterType, IFilterCriteria} from "../../model/IItems";


type SidebarState = {
    openMenu: boolean;
    filterData: IFilter;
    clickedItem: String;
    error: String;
    filterCriteria: IFilterCriteria;
}

export interface ISidebarProps {
    sendCriteria?: (filterCriteria: IFilterCriteria) => void;
}


export class Sidebar extends Component<ISidebarProps, SidebarState> {

    constructor(props: any) {
        super(props);
        this.state = {
            openMenu: false,
            filterData: {
                categories: [],
                discounts: new Map<String, String>(),
                priceRanges: new Map<String, String>()
            },
            clickedItem: null,
            error: "",
            filterCriteria: {
                searchKey: null, // text from product name
                catId: 0,
                priceRange: null,
                savings: null,
                sortBy: "price", // price and savings
                pageIndex: 0,
                pageSize: 20
            }
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.captureFilterCriteria = this.captureFilterCriteria.bind(this);
    }

    public componentDidMount() {

        fetch('http://doc-aks-ingress.eastus.cloudapp.azure.com:8082/doc/appdata', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        })
            .then(res => res.json())
            .then((data: IFilter) => {
                this.setState({ filterData: data })
            })
            .catch(console.log)

    }

    toggleCollapse = () => {
        this.setState({openMenu: !this.state.openMenu} );
    }

    captureFilterCriteria = (filterType: FilterType, value: String | number) => {
        // state is getting updated with a delay
        switch (filterType) {
            case FilterType.CATEGORY:
                this.setState( {
                    filterCriteria: {
                        ...this.state.filterCriteria,
                        catId: value as number
                    }
                })
                break;
            case FilterType.PRICERANGE:
                this.setState({
                    filterCriteria: {
                        ...this.state.filterCriteria,
                        priceRange: value as string
                    }
                })
                break;
            case FilterType.DISCOUNTS:
                this.setState({
                    filterCriteria: {
                        ...this.state.filterCriteria,
                        savings: value as string
                    }
                })
                break;

            default:
                break;

        }

        this.props.sendCriteria(this.state.filterCriteria);
    }

    render() {
        return (
            <div className="sidebar-wrapper">
                <Container className={"filter-container-style"}>
                        <Container>
                            <NavDropdown title={"Categories"} id={"nav-categories"}>
                                <ListGroup className={"list-style"}>
                                    {
                                        this.state.filterData.categories != null ? this.state.filterData.categories.map((category: ICategory, index) => {
                                            return  (
                                                <ListGroupItem action onClick={() => this.captureFilterCriteria(FilterType.CATEGORY, category.catId)}>{category.catName}</ListGroupItem>
                                            )
                                            }
                                        ) : undefined
                                    }
                                </ListGroup>
                            </NavDropdown>
                        </Container>

                        <Container>
                            <NavDropdown title={"Price Ranges"} id={"nav-categories"}>
                                <ListGroup className={"list-style"}>

                                    {

                                        this.state.filterData  && this.state.filterData.priceRanges ?
                                            Object.entries(this.state.filterData.priceRanges).map(([key, value], index: number) => {
                                                return (
                                                    <ListGroupItem action onClick={() => this.captureFilterCriteria(FilterType.PRICERANGE, key)}>{value}</ListGroupItem>
                                                )

                                            }) : undefined

                                    }
                                </ListGroup>
                            </NavDropdown>
                        </Container>

                        <Container>
                            <NavDropdown title={"Discount"} id={"nav-categories"}>
                                <ListGroup className={"list-style"}>
                                    {
                                        this.state.filterData  && this.state.filterData.discounts ?
                                        Object.entries(this.state.filterData.discounts).map(([key, value], index: number) => {
                                            return (
                                                <ListGroupItem action onClick={()=>this.captureFilterCriteria(FilterType.DISCOUNTS, key)}>{value}</ListGroupItem>
                                            )
                                        }) : undefined
                                    }
                                </ListGroup>
                            </NavDropdown>
                        </Container>
                </Container>

                <ListGroup>

                </ListGroup>

            </div>
        );
    }
}
