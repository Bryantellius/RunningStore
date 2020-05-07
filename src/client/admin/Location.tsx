import * as React from "react";

class Location extends React.Component<ILocationProps, ILocationState> {
  constructor(props: ILocationProps) {
    super(props);
    this.state = {
      name: null,
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">Location</h1>
      </main>
    );
  }
}

export interface ILocationProps {}

export interface ILocationState {
  name: string;
}

export default Location;