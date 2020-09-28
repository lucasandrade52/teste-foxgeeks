import React from "react";

import Button from "../Button";
import Input from "../Input";
import Title from "../Title";

import { TITLE_WHEEL, TEXT_WHEEL } from "../../constants";
import "./style.scss";

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    };
    const spinning = selectedItem !== null ? "spinning" : "";

    return (
      <section className="control">
        <div className="control__title">
          <Title head={"h2"} title={TITLE_WHEEL} />
          <p>{TEXT_WHEEL}</p>
          <Input type="email" name="email" placeholder="Seu E-mail" />
          <Button onClick={this.selectItem}>Continuar!</Button>
        </div>

        <div className="wheel-container">
          <div
            className={`wheel ${spinning}`}
            style={wheelVars}
            onClick={this.selectItem}
          >
            {items.map((item, index) => (
              <div
                className="wheel-item"
                key={index}
                style={{ "--item-nb": index }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
