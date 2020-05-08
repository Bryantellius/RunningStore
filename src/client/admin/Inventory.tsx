import * as React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { IShoe } from "../utils/types";
import { apiService } from "../utils/apiService";

class Inventory extends React.Component<IInventoryProps, IInventoryState> {
  constructor(props: IInventoryProps) {
    super(props);
    this.state = {
      shoes: [],
      quantity: 0,
    };
    this.goToModel = this.goToModel.bind(this);
  }

  goToModel = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let model = document.getElementById(
      "adminModelSelect"
    ) as HTMLSelectElement;
    // console.log(this.props.props.history);
    this.props.props.history.push(`/admin/${model.value}`);
  };

  async componentDidMount() {
    try {
      let shoes = await apiService("/api/shoes");
      this.setState({ shoes });
    } catch (err) {
      throw err;
    }
  }

  render() {
    return (
      <>
        <Card className="p-3 my-2">
          {/* Select options to filter shoe model */}
          <select id="adminModelSelect" className="custom-select">
            {this.state.shoes.map((shoe: IShoe) => {
              return (
                <option
                  key={`${shoe.id}-${shoe.model_name}`}
                  value={shoe.model_name}
                >
                  {shoe.brand_name} {shoe.model_name}
                </option>
              );
            })}
          </select>
          {/* Checkboxes to filter shoe gender */}
          <Button
            variant="info"
            className="my-3 d-block"
            onClick={this.goToModel}
          >
            Check Inventory
          </Button>
        </Card>
      </>
    );
  }
}

export interface IInventoryProps extends React.ComponentPropsWithRef<any> {}

export interface IInventoryState {
  shoes: IShoe[];
  quantity: number;
}

export default Inventory;
