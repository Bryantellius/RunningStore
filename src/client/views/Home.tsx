import * as React from "react";
import { IShoe } from "../utils/types";

export const Home: React.FC<IHomeProps> = () => {
  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">Home</h1>
    </main>
  );
};

export interface IHomeProps {}

export default Home;
