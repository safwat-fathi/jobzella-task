import React from "react";
// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// app components
import Nav from "./components/Nav";
import Card from "./components/Card";
import Footer from "./components/Footer";
// assets
import cardImg from "./assets/images/cardImage.jpg";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <section style={{ padding: "1em 2em" }}>
                  <Card
                    img={cardImg}
                    heading={"Lorem Ipsum"}
                    subheading={"Lorem Ipsum, dolor"}
                    description={
                      "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum."
                    }
                  />
                </section>
              );
            }}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
