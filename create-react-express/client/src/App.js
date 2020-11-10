import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/SaveBook";
import SearchBooks from "./pages/SearchBook";
import NoMatch from "./pages/NoMatch";

import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} /> 
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;