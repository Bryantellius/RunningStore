import * as React from "react";

class Shop extends React.Component<IShopProps, IShopState> {
  constructor(props: IShopProps) {
    super(props);
    this.state = {
      name: null,
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">Shop</h1>
      </main>
    );
  }
}

export interface IShopProps {}

export interface IShopState {
  name: string;
}

export default Shop;
