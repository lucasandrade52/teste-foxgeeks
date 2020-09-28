import React from "react";

import Input from "../../../Input";
import Button from "../../../Button";

import "./style.scss";

export default function Search({ placeholder, onClick }) {
  return (
    <section className="search">
      <Input type="text" placeholder={placeholder} />
      <Button onClick={onClick}>Buscar</Button>
    </section>
  );
}
