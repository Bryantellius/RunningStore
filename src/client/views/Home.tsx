import * as React from "react";
import { IShoe } from "../utils/types";

class Home extends React.Component<IHomeProps, IHomeState> {
  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">Home</h1>
      </main>
    );
  }
}

export interface IHomeProps {}

export interface IHomeState {
  shoes: IShoe[];
}

export default Home;
