const express = require("express");
const app = express();
const port = 3000;

const jsonToConvert = [
  {
    type: "div",
    content: [
      { type: "h1", content: "This is a header" },
      { type: "p", content: "This is a paragraph" },
    ],
  },
];

const textElements = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
const blockElements = [
  "div",
  "span",
  "section",
  "footer",
  "header",
  "main",
  "nav",
];

const convertJSONtoHTML = (element) => {
  if (blockElements.includes(element.type)) {
    return `<${element.type}>${element.content
      .map(convertJSONtoHTML)
      .join("")}</${element.type}>`;
  } else {
    return `<${element.type}>${element.content}</${element.type}>`;
  }
};

app.get("/", (req, res) => {
  res.send(`${jsonToConvert.map(convertJSONtoHTML).join("")}`);
});

app.listen(port, () => `Server listening on port ${port}.`);
