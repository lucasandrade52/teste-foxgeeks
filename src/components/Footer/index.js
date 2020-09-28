import React from "react";

import Image from "../Image";

import { LOGO_DEFAULT, LOGO_ALT } from "../../constants";
import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Fox Geeks - CPF: 630.873.843-30 © Todos os direitos reservados. 2020
      </p>
      <figure className="logo">
        <Image src={LOGO_DEFAULT} alt={LOGO_ALT} />
      </figure>
    </footer>
  );
}
