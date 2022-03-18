import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies/:id" children={<Movie />} />
      </Switch>
    </Router>
  );
}

export default App;
