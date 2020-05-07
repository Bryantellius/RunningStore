import * as React from "react";
import Card from "react-bootstrap/Card";
import { apiService } from "../utils/apiService";
import { IShoe } from "../utils/types";

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      details: {
        total: 0,
        shoes: [],
      },
    };
  }

  async componentDidMount() {
    try {
      let details = await apiService("/api/shoes/by_brand/Bradley");
      this.setState({ details });
    } catch (err) {
      throw err;
    }
  }

  render() {
    return (
      <>
        <h1 className="text-dark text-center">Dashboard</h1>
        <Card>
          <Card.Body>
            <Card.Header>Total Inventory</Card.Header>
            <Card.Text>25</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Header>Bradley Inventory</Card.Header>
            <Card.Text>{this.state.details.total}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export interface IDashboardProps {}

export interface IDashboardState {
  details: {
    total: number;
    shoes: IShoe[];
  };
}

export default Dashboard;
