import React from 'react';
import './App.scss';
import {Header} from "./pages/header/header";
import {Sidebar} from "./pages/sidebar/sidebar";
import Pagination from "react-bootstrap/Pagination";
import ItemsComponent from "./pages/items/items";
import {connect} from "react-redux";
import {getItems, getItemsByFilter, createFilter, IFilterState, clearItems} from "./state/filter-state/filter-actions";
import {RouteComponentProps} from "react-router";
import {IFilterCriteria, IItems} from "./model/IItems";
import {initialFilterState} from "./state/filter-state/filter-reducer";



export interface IAppProps extends RouteComponentProps {
    getItems?: typeof getItems;
    items?: IItems;
    getItemsByFilter?: typeof getItemsByFilter;
    createFilter?: typeof createFilter;
    filter?: IFilterCriteria;
    clearItems?: typeof clearItems;
}

export interface IAppState {
    items: IItems;
    activePage: number;
    pageCount: number;
    chips: string[]

}

// const ItemsComponent = React.lazy(() => import("./pages/items/items"));

class App extends React.Component<IAppProps, IAppState> {

    static PAGESIZE: number = 20;

    constructor(props: IAppProps) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.getItemsByCriteria = this.getItemsByCriteria.bind(this);
        this.getItemsByPage = this.getItemsByPage.bind(this);
        this.state = {
            items: initialFilterState.items,
            activePage: 1,
            pageCount: 1,
            chips: []
        }
    }

    componentWillMount() {
        this.props.getItems();
    }

    componentDidUpdate(prevProps: Readonly<IAppProps>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.items !== this.props.items) {
            this.setState({items: this.props.items}, () => {
                if(this.props.items.products && this.props.items.products.length > 0) {
                    this.setState({
                        pageCount: this.props.items.products.length / App.PAGESIZE,
                        items: {
                            ...this.state.items,
                            products: [...this.props.items.products.slice(this.state.activePage * App.PAGESIZE, (this.state.activePage + 1) * App.PAGESIZE)]
                        }
                    })
                }
            });

        }
    }

    componentDidMount() {
        if(this.props.items && this.props.items.products && this.props.items.products.length ===0) {
            this.props.getItems();
        }
    }



    getItemsByCriteria(filterCriteria: IFilterCriteria): void {

        const entries: string[] = [];

        Object.entries(filterCriteria).forEach(([key,value] )=> {
            if((key === "priceRange" || key === "savings" || key === "catId") && value != null) {
                entries.push(value);
            }
        });

        this.setState({chips: entries});

        this.props.clearItems();
        this.setState({
            activePage: 1,
            pageCount: 1
        })
        this.props.createFilter(filterCriteria);
        this.props.getItemsByFilter(filterCriteria);
    }


    getItemsByPage(pageNumber: number): void {
        this.setState({
            activePage: pageNumber
        }, () => {
            this.setState({
                items: {
                    ...this.state.items,
                    products: [...this.props.items.products.slice(this.state.activePage * App.PAGESIZE, (this.state.activePage + 1) * App.PAGESIZE)]
                }
            })
        })
    }

    clearChips = () => {
        this.setState({
            chips: []
        });
        this.props.getItems();
    }



    public render() {

        let items: JSX.Element[] = [];

        if(this.state.pageCount > 1) {
            for (let number = 1; number <= this.state.pageCount; number++) {
                items.push(
                    <Pagination.Item key={number} active={number === this.state.activePage} onClick={() => {this.getItemsByPage(number)}}>
                        {number}
                    </Pagination.Item>,
                );
            }
        }


        return (
            <div className="App">
                <Header></Header>
                <div className={"area-style"}>
                    <Sidebar sendCriteria={(filterCriteria:IFilterCriteria) => this.getItemsByCriteria( filterCriteria)}></Sidebar>
                    <div className={"display-section"}>
                        <ItemsComponent filters={this.state.chips}
                                        items={this.state.items}
                                        itemsTotal={this.props.items && this.props.items.products ? this.props.items.products.length : 0}
                                        clearFilter={this.clearChips}
                        ></ItemsComponent>
                        <div className={"footer-style"}>
                            <Pagination size={"sm"}>{items}</Pagination>
                        </div>
                    </div>

                </div>
            </div>
        );
    }


}

const mapStateToProps = (store: IFilterState) => {
    return {
        items: store.items,
        filter: store.filter
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getItems: () => dispatch(getItems()),
        createFilter: (filter: IFilterCriteria) => dispatch(createFilter(filter)),
        getItemsByFilter: (filter: IFilterCriteria) => dispatch(getItemsByFilter(filter)),
        clearItems: () => dispatch(clearItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
