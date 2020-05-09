import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AdminOptions from "./admin/AdminOptions";
import Login from "./admin/Login";

export const App: React.FC<IAppProps> = () => {
  return (
    <main id="appMain" className="container-fluid">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route exact path="/admin" component={AdminOptions} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export interface IAppProps {}

export default App;
