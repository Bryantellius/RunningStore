import * as React from "react";

class Contact extends React.Component<IContactProps, IContactState> {
  constructor(props: IContactProps) {
    super(props);
    this.state = {
      name: null,
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">Contact</h1>
      </main>
    );
  }
}

export interface IContactProps {}

export interface IContactState {
  name: string;
}

export default Contact;
