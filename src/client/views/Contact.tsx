import * as React from "react";

export const Contact: React.FC<IContactProps> = () => {
  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">Contact</h1>
    </main>
  );
};

export interface IContactProps {}

export default Contact;
