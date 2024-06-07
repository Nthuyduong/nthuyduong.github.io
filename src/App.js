import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
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
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/react-fontawesome"
import { AnimationProvider } from "./provider/animation";

const App = () => {

  return (
    <Router>
      <Switch>
        <AnimationProvider>
          <Layout>
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
          </Layout>
        </AnimationProvider>
      </Switch>  
    </Router>
  );
}

export default App;
