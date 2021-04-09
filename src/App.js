import React from "react";
// app components
import Nav from "./components/Nav";
import Card from "./components/Card";
import Footer from "./components/Footer";

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
