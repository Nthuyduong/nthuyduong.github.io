import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import { ROUTER } from "./utils/constants";
import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Aguri from "./pages/aguri";
import Alio from "./pages/alio";
import Fashion from "./pages/fashion"
import Cake from "./pages/cake";
import Designs from "./pages/designs";
import Abouttest from "./pages/abouttest";
import BeautyBlog from "./pages/beauty_blog";
import NotFound from "./pages/404";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/react-fontawesome"
import { AnimationProvider } from "./provider/animation";

const App = () => {

  return (
    <Router>
        <AnimationProvider>
          <Layout>
            <Switch>
              <Route exact path={ROUTER.HOME} component={Home}/>
              <Route path={ROUTER.ABOUT} component={About}/>
              <Route path={ROUTER.CONTACT} component={Contact}/>
              <Route path={ROUTER.AGURI} component={Aguri}/>
              <Route path={ROUTER.ALIO} component={Alio}/>
              <Route path={ROUTER.FASHION} component={Fashion}/>
              <Route path={ROUTER.CAKE} component={Cake}/>
              <Route path={ROUTER.DESIGNS} component={Designs}/>
              <Route path={ROUTER.ABOUTTEST} component={Abouttest}/>
              <Route path={ROUTER.BEAUTYBLOG} component={BeautyBlog}/>
              <Route path={ROUTER.NOTFOUND} component={NotFound}/>
              <Route path="/*">
                <Redirect to={ROUTER.NOTFOUND}/>
              </Route>
            </Switch>
          </Layout>
        </AnimationProvider>
      
    </Router>
  );
}

export default App;
