import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));

const App = () => (
  <Router>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route
          path="/"
          exact={true}
          component={(props) => <Home {...props} />}
        />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
