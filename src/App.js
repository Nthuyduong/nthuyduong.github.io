import React from "react";
import {
  Route,
  HashRouter as Router,
  Switch,
  DefaultRoute,
} from "react-router-dom";

import { ROUTER } from "./utils/constants";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";


const App = () => {

  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path={ROUTER.HOME} component={Home}/>
          <Route path={ROUTER.ABOUT} component={About}/>
          <Route path={ROUTER.CONTACT} component={Contact}/>
        </Layout>
      </Switch>  
    </Router>
  );
}

export default App;
