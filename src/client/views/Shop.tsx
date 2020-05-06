import * as React from "react";
import { CardColumns, Card, InputGroup, FormControl } from "react-bootstrap";
import { IShoe } from "../utils/types";
import { apiService } from "../utils/apiService";

class Shop extends React.Component<IShopProps, IShopState> {
  constructor(props: IShopProps) {
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
      <main className="row my-5">
        <div className="col-sm-4">
          <label>Filter Results</label>
          <InputGroup>
            <FormControl aria-label="Filter Shoes" placeholder="Search..." />
          </InputGroup>
        </div>
        <div className="col-sm-8">
          <CardColumns>
            {this.state.shoes.map((shoe: IShoe) => {
              return (
                <Card key={`${shoe.id}-${shoe.model_name}`}>
                  <Card.Img variant="top"></Card.Img>
                  <Card.Body>
                    <Card.Text className="d-flex flex-column justify-content-start align-items-start p-2">
                      <span>
                        <u>{shoe.gender}</u>
                      </span>
                      <span>{`${shoe.brand_name} ${shoe.model_name}`}</span>
                      <span>
                        <em>${shoe.price}</em>
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </CardColumns>
        </div>
      </main>
    );
  }
}

export interface IShopProps {}

export interface IShopState {
  shoes: IShoe[];
}

export default Shop;
