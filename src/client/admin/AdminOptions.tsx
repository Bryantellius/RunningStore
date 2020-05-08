import * as React from "react";
import { apiService, User } from "../utils/apiService";
import Inventory from "./Inventory";
import Location from "./Location";
import Dashboard from "./Dashboard";

class AdminOptions extends React.Component<
  IAdminOptionsProps,
  IAdminOptionsState
> {
  constructor(props: IAdminOptionsProps) {
    super(props);
    this.state = {
      name: null,
    };
  }

  async componentDidMount() {
    if (!User || User.userid === null || User.role !== "admin") {
      this.props.history.replace("/login");
    }
  }

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-dark text-center p-2 border-bottom border-info">
          Store Management
        </h1>
        <div className="row">
          <div className="col-sm-4 text-center">
            <Inventory props={this.props}/>
          </div>
          <div className="col-sm-4 text-center">
            <Dashboard props={this.props}/>
          </div>
          <div className="col-sm-4">
            <Location />
          </div>
        </div>
      </main>
    );
  }
}

export interface IAdminOptionsProps extends React.ComponentPropsWithRef<any> {}

export interface IAdminOptionsState {
  name: string;
}

export default AdminOptions;
