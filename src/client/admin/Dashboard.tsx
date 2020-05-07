import * as React from "react";
import Card from "react-bootstrap/Card";

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: IDashboardProps) {
    super(props);
    this.state = {
      name: null,
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <>
        <h1 className="text-dark text-center">Dashboard</h1>
        <Card>
            <Card.Body>
                <Card.Header>
                    Total Inventory
                </Card.Header>
                <Card.Text>
                    25
                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <Card.Header>
                    Bradley Inventory
                </Card.Header>
                <Card.Text>
                    5
                </Card.Text>
            </Card.Body>
        </Card>
      </>
    );
  }
}

export interface IDashboardProps {}

export interface IDashboardState {
  name: string;
}

export default Dashboard;
