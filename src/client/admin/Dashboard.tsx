import * as React from "react";
import { apiService } from "../utils/apiService";
import { IShoe } from "../utils/types";

export const Dashboard: React.FC<IDashboardProps> = () => {
  const [details, setDetails] = React.useState<{
    total: number;
    shoes: IShoe[];
  }>(null);

  React.useEffect(() => {
    (async () => {
      try {
        let details = await apiService(`/api/shoes/by_brand/Bradley`);
        setDetails(details);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  return (
    <>
      <h1 className="text-dark text-center">Dashboard</h1>
      <div className="card">
        <div className="card-body">
          <div className="card-title">Total Inventory</div>
          <div className="card-text">25</div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="card-title">Bradley Inventory</div>
          <div className="card-text">{details?.total}</div>
        </div>
      </div>
    </>
  );
};

export interface IDashboardProps {}

export interface IDashboardState {
  details: {
    total: number;
    shoes: IShoe[];
  };
}

export default Dashboard;
