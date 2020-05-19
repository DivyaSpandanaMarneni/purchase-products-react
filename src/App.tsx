import React from 'react';
import './App.scss';
import {Header} from "./pages/header/header";
import {Sidebar} from "./pages/sidebar/sidebar";
import Pagination from "react-bootstrap/Pagination";
import ItemsComponent from "./pages/items/items";

class App extends React.Component<{},{}> {

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
                <Sidebar className={"side-bar-style"}></Sidebar>
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

export default App;
