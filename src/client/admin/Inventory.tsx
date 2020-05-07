import * as React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import { IShoe } from "../utils/types";
import { apiService } from "../utils/apiService";

class Inventory extends React.Component<IInventoryProps, IInventoryState> {
  constructor(props: IInventoryProps) {
    super(props);
    this.state = {
      shoes: [],
    };
  }

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
        <ButtonGroup aria-label="Inventory Options">
          <Button variant="success">Insert</Button>
          <Button variant="warning">Update</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
        <Card className="p-3 my-2">
          {/* Select options to filter shoe model */}
          <select>
            {this.state.shoes.map((shoe: IShoe) => {
              return (
                <option key={`${shoe.id}-${shoe.model_name}`}>
                  {shoe.brand_name} {shoe.model_name}
                </option>
              );
            })}
          </select>
          {/* Checkboxes to filter shoe gender */}
          <InputGroup className="d-flex justify-content-around align-items-center p-3 my-2">
            <label>Male</label>
            <InputGroup.Checkbox aria-label="Checkbox for male gender" />
            <label>Female</label>
            <InputGroup.Checkbox aria-label="Checkbox for female gender" />
          </InputGroup>
        </Card>

        <Card className="p-3 my-2">
          <h6>Model Quantity</h6>
          <InputGroup className="w-50 mx-auto">
            <InputGroup.Prepend>
              <InputGroup.Text>-</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Input for quantity" placeholder="Custom" />
            <InputGroup.Append>
              <InputGroup.Text>+</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          <h6>Price</h6>
          <InputGroup className="w-50 mx-auto">
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="Input for price" />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Card>
      </>
    );
  }
}

export interface IInventoryProps {}

export interface IInventoryState {
  shoes: IShoe[];
}

export default Inventory;
