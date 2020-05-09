import * as React from "react";
import { apiService } from "../utils/apiService";
import { IShoe } from "../utils/types";
import * as moment from "moment";

export const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div className="card-group my-2 shadow">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Total Inventory</h3>
          <h5 className="card-text text-6">25</h5>
        </div>
      </div>
      <div className="card">
        <div className="card-body d-flex justify-content-center align-items-center bg-light">
          <h3 className="card-text">{moment().format("MMM DD YYYY")}</h3>
        </div>
      </div>
    </div>
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
