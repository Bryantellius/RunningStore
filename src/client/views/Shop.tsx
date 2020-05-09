import * as React from "react";
import { IShoe } from "../utils/types";
import { apiService } from "../utils/apiService";

export const Shop: React.FC<IShopProps> = () => {
  const [shoes, setShoes] = React.useState<IShoe[]>([]);

  React.useEffect(() => {
    (async () => {
      let shoes = await apiService(`/api/shoes`);
      setShoes(shoes);
    })();
  }, []);

  return (
    <main className="row my-5">
      <div className="col-sm-4">
        <label>Filter Results</label>
        <div>
          <input
            className="form-control"
            aria-label="Filter Shoes"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="col-sm-8">
        <div className="row row-cols-1 row-cols-md-3">
          {shoes.map((shoe: IShoe) => {
            return (
              <div className="col md-4 mb-2" key={`${shoe.id}-${shoe.model_name}`}>
                <div className="card">
                  <div className="card-img-top">Img</div>
                  <div className="card-body">
                    <div className="card-text d-flex flex-column justify-content-start align-items-start p-2">
                      <span>
                        <u>{shoe.gender}</u>
                      </span>
                      <span>{`${shoe.brand_name} ${shoe.model_name}`}</span>
                      <span>
                        <em>${shoe.price}</em>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export interface IShopProps {}

export default Shop;
