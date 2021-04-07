import React from "react";
// app components
import Nav from "./containers/Nav";
import Card from "./containers/Card";

const App = () => {
  return (
    <div>
      <Nav />
      <section style={{ padding: "1em 2em" }}>
        <Card />
      </section>
    </div>
  );
};

export default App;
