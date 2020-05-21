import React from 'react';
import './App.scss';
import {Header} from "./pages/header/header";
import {Sidebar} from "./pages/sidebar/sidebar";
import Pagination from "react-bootstrap/Pagination";
import ItemsComponent from "./pages/items/items";
import {connect} from "react-redux";
import {getItems, getItemsByFilter, createFilter, IFilterState} from "./state/filter-state/filter-actions";
import {RouteComponentProps} from "react-router";
import {IFilterCriteria, IItems} from "./model/IItems";

export interface IAppProps extends RouteComponentProps {
    getItems?: typeof getItems;
    items?: IItems;
    getItemsByFilter?: typeof getItemsByFilter;
    createFilter?: typeof createFilter;
    filter?: IFilterCriteria;
}

class App extends React.Component<IAppProps> {

    constructor(props: IAppProps) {
        super(props);
        this.getItemsByCriteria = this.getItemsByCriteria.bind(this);
    }

    componentWillMount() {
        this.props.getItems();
    }

    componentDidMount() {
        console.log('inside component did mount of app: getting items')
        this.props.getItems();
    }

    getItemsByCriteria(filterCriteria: IFilterCriteria): void {
        this.props.createFilter(filterCriteria);
        console.log('filter criteria from side bar ', filterCriteria);
        this.props.getItemsByFilter(filterCriteria);
    }


    public render() {

        let items: JSX.Element[] = [];
        const active = 2;

        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
        return (
            <div className="App">
                <Header></Header>
                <div className={"area-style"}>
                    <Sidebar sendCriteria={(filterCriteria:IFilterCriteria) => this.getItemsByCriteria( filterCriteria)}></Sidebar>
                    <div className={"display-section"}>
                        <ItemsComponent></ItemsComponent>
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
        getItemsByFilter: (filter: IFilterCriteria) => dispatch(getItemsByFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
