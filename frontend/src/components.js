import React from "react";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Image from "./components/Image/Image";

const Components = {
  button: Button,
  container: Container,
  image: Image,
};

export default (block) => {
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block._uid,
      block: block,
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
