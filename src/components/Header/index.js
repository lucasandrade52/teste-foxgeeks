import React from "react";

import Fillet from "./fragments/Fillet";
import Logo from "./fragments/Logo";
import Search from "./fragments/Search";
import Actions from "./fragments/Actions";

import "./style.scss";

export default function Header() {
  return (
    <header className="header">
      <Fillet />
      <section className="header__main">
        <Logo />
        <Search placeholder="Digite o que você procura..." />
        <Actions items={2} />
      </section>
    </header>
  );
}
