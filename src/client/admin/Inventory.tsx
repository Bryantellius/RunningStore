import * as React from "react";
import { IShoe } from "../utils/types";
import { apiService } from "../utils/apiService";
import { useHistory, NavLink } from "react-router-dom";

export const Inventory: React.FC<IInventoryProps> = () => {
  const [shoes, setShoes] = React.useState<IShoe[]>([]);
  const [option, setOption] = React.useState<string>("1");

  const history = useHistory();

  const goToModel = async () => {
    console.log(option);
    // let model = document.getElementById(
    //   "adminModelSelect"
    // ) as HTMLSelectElement;
    // history.push(`/admin/${model.value}`);
  };

  React.useEffect(() => {
    (async () => {
      try {
        let shoes = await apiService("/api/shoes");
        setShoes(shoes);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  return (
    <>
      <div className="card p-3 my-2">
        {/* Select options to filter shoe model */}
        <select
          id="adminModelSelect"
          className="custom-select"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setOption(e.target.value)
          }
        >
          {shoes.map((shoe: IShoe) => {
            return (
              <option
                key={`${shoe.id}-${shoe.model_name}`}
                value={`${shoe.id}`}
              >
                {shoe.brand_name} {shoe.model_name}
              </option>
            );
          })}
        </select>
        <NavLink
          className="btn btn-info my-3 d-block"
          exact to={`/admin/model/${option}`}
        >
          Check Inventory
        </NavLink>
      </div>
    </>
  );
};

export interface IInventoryProps {}

export default Inventory;
