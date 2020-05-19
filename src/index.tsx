import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {Store} from "redux";
import configureStore from "./state/store/doc-state";
import {IApplicationState} from "./state/store/doc-state";
import Routes from "./shared-components/routes";

interface IProps {
    store: Store<IApplicationState>;
}

const Root: React.FC<IProps> = (props) => {
    return (
        <Provider store={props.store}>
            <Routes/>
        </Provider>
    );
}


// <React.StrictMode>
//     <App />
// </React.StrictMode>

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
