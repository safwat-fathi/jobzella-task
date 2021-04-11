import React from "react";
// react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// app components
import CardsContainer from "./components/CardsContainer";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Footer from "./components/Footer";
// data
import Details from "./components/Details";
import { cards } from "./data";
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
                <CardsContainer>
                  {cards.map((card, index) => {
                    return (
                      <Card
                        key={index}
                        id={index}
                        img={card.img}
                        heading={card.heading}
                        subheading={card.subheading}
                        description={card.description}
                      />
                    );
                  })}
                </CardsContainer>
              );
            }}
          />
          <Route exact path={`/details/:ID`} component={Details} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
