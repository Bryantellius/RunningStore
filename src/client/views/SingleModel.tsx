import * as React from "react";
import { IShoe } from "../utils/types";
import { apiService } from "../utils/apiService";
import { useParams } from "react-router-dom";

export const SingleModel: React.FC<ISingleModelProps> = () => {
  const [shoes, setShoes] = React.useState<IShoe[]>([]);

  const params: any = useParams();

  React.useEffect(() => {
    (async () => {
      let shoes = await apiService(`/api/shoes/by_model/${params.id}`);
      setShoes(shoes);
    })();
  }, []);

  return (
    <main className="container my-5">
      <h1 className="text-primary text-center"></h1>
      <div className="row row-cols-1 row-cols-md-2">
        {shoes?.map((shoe: IShoe) => {
          return (
            <div
              className="col md-4"
              key={`${shoe.brand_name}-${shoe.id}-${shoe.size}`}
            >
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    {shoe.brand_name} {shoe.model_name}
                  </div>
                  <div className="card-text">
                    {shoe.gender} {shoe.size} {shoe.price}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export interface ISingleModelProps {}

export default SingleModel;
