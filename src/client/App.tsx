import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import NavBar from "./components/NavBar";

class App extends React.Component<IAppProps> {
  render() {
    return (
      <main className="container-fluid">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export interface IAppProps {}

export default App;
