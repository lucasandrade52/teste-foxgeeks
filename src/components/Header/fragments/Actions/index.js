import React from "react";
import { ListAlt } from "@material-ui/icons";

import Button from "../../../Button";
import Image from "../../../Image";

import {
  LOGO_ICON,
  ACCOUNT_ALT,
  EMPTY_CART,
  ONE_ITEM_CART,
  MANY_ITEMS_CART,
} from "../../../../constants";
import "./style.scss";

export default function Actions({ items }) {
  const buttonText =
    items <= 0 ? EMPTY_CART : items === 1 ? ONE_ITEM_CART : MANY_ITEMS_CART;
  return (
    <section className="actions">
      <Button>
        <ListAlt />
      </Button>
      <Button style={{ padding: 5 }}>
        <Image src={LOGO_ICON} alt={ACCOUNT_ALT} />
      </Button>
      <Button>{items + " " + buttonText}</Button>
    </section>
  );
}
