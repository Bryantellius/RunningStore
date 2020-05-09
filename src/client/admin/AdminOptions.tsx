import * as React from "react";
import { User } from "../utils/apiService";
import Inventory from "./Inventory";
import Location from "./Location";
import Dashboard from "./Dashboard";
import { useHistory } from "react-router-dom";

export const AdminOptions: React.FC<IAdminOptionsProps> = () => {
  const history = useHistory();

  React.useEffect(() => {
    if (!User || User.userid === null || User.role !== "admin") {
      history.push("/login");
    }
  }, []);

  return (
    <main className="container my-5">
      <h1 className="text-dark text-center p-2 border-bottom border-info">
        Store Management
      </h1>
      <div className="row">
        <div className="col-sm-4 text-center">
          <Inventory />
        </div>
        <div className="col-sm-8 text-center">
          <Dashboard />
        </div>
      </div>
    </main>
  );
};

export interface IAdminOptionsProps {}

export default AdminOptions;
