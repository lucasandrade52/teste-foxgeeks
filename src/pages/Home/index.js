import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Title from "../../components/Title";

import "./style.scss";

export default function Home() {
  const title = "Gire a roleta e ganhe até 15% de desconto!";

  return (
    <>
      <Header />
      <article className="content">
        <Title head="h4" title={title} />
        <Button>
          <Link to="/wheel">Jogar</Link>
        </Button>
      </article>
      <Footer />
    </>
  );
}
