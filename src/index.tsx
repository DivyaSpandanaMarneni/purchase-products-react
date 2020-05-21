import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import store from "./state/store/doc-state";
import {Router, Route} from "react-router-dom";
import history from "./state/store/history";

const AppComponent = React.lazy(() => import("./App"));


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Suspense fallback={<div>Loading.......</div>}>
                <Route path="/" component={AppComponent}></Route>
            </Suspense>
        </Router>
    </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
