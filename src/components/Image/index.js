import React from "react";

import "./style.scss";

export default function Image({ src, alt }) {
  return <img src={src} alt={alt} />;
}
