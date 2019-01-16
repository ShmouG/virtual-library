import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Address from "./pages/Contact";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Contact} />
          <Route exact path="/address" component={Contact} />
          <Route exact path="/address/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
