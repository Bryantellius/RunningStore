import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { apiService, User } from "../utils/apiService";

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
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">AdminOptions</h1>
      </main>
    );
  }
}

export interface IAdminOptionsProps extends RouteComponentProps {}

export interface IAdminOptionsState {
  name: string;
}

export default AdminOptions;
