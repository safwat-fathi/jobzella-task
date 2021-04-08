import React from "react";
// app containers
import Nav from "./containers/Nav";
import Card from "./containers/Card";
import Footer from "./containers/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <section style={{ padding: "1em 2em" }}>
        <Card />
      </section>
      <Footer />
    </div>
  );
};

export default App;
