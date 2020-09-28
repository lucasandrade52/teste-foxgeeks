import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, WhatsApp } from "@material-ui/icons";

import "./style.scss";

export default function Fillet() {
  return (
    <div className="navbar-header">
      <div className="navbar-header__container">
        <div className="navbar-header__login">
          <Link to="/">
            Bem-vindo, <span>identifique-se</span> para fazer pedidos
          </Link>
        </div>
        <div className="navbar-header__contact">
          <Link className="mail" to="/">
            <Mail />
          </Link>
          <Link className="phone" to="/">
            <Phone />
          </Link>
          <Link className="whats" to="/">
            <WhatsApp />
            <span> (81) 97115-3567</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
