import * as React from "react";
import { apiService } from "../utils/apiService";
import { IShoe } from "../utils/types";
import { CardColumns, Card } from "react-bootstrap";

class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      shoes: [],
    };
  }

  async componentDidMount() {
    let shoes = await apiService(`/api/shoes`);
    this.setState({ shoes });
  }

  render() {
    return (
      <main className="container my-5">
        <h1 className="text-primary text-center">Home</h1>
        <CardColumns>
          {this.state.shoes.map((shoe: IShoe) => {
            return (
              <Card key={`${shoe.id}-${shoe.model_name}`}>
                <Card.Img variant="top"></Card.Img>
                <Card.Body>
                  <Card.Text>{`${shoe.brand_name} ${shoe.model_name}`}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </main>
    );
  }
}

export interface IHomeProps {}

export interface IHomeState {
  shoes: IShoe[];
}

export default Home;
