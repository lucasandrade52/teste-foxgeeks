import React from "react";

import Header from "../../components/Header";
import Wheel from "../../components/Wheel";
import Footer from "../../components/Footer";

import { ITEMS_WHEEL } from "../../constants";
import "./style.scss";

export default function WheelPage() {
  return (
    <>
      <Header />
      <Wheel items={ITEMS_WHEEL} />
      <Footer />
    </>
  );
}
