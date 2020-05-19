import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import * as React  from "react";

const Routes: React.FC = () => {
    return (
        <Router>
            <div>
                <Route path={"/home"} component={App}/>
                <Route path={"/guest"} component = {App}/>
            </div>
        </Router>
    )
}

export default Routes;