import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends React.Component<IAppProps> {
  render() {
    return (
      <main id="appMain" className="container-fluid">
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
          <Footer />
        </BrowserRouter>
      </main>
    );
  }
}

export interface IAppProps {}

export default App;
