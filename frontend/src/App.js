import Components from "./components.js";

const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "button",
        content: "Test Button",
      },
      {
        _uid: "gJZoSLkfZV",
        component: "button",
        content: "Another Button",
      },
      {
        _uid: "2HRK2HFHJS",
        component: "image",
        url: "https://images.unsplash.com/photo-1666811059629-f052240cde19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        alt: "A photo",
        shape: "circle",
        size: "medium",
      },
    ],
  },
};

function App() {
  return (
    <div className="App">
      {data.content.body.map((block) => Components(block))}
    </div>
  );
}

export default App;
