import React from "react";

import Image from "../../../Image";
import { LOGO_DEFAULT, LOGO_ALT } from "../../../../constants";
import LogoAlternative from "../../../../assets/fox.png";

import "./style.scss";

export default function Logo() {
  return (
    <figure className="logo">
      <Image src={LOGO_DEFAULT} alt={LOGO_ALT} />
      {/* <Image src={LogoAlternative} alt={LOGO_ALT} /> */}
    </figure>
  );
}
