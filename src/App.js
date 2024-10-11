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
import Workout from "./pages/workout";
import NotFound from "./pages/404";
import ProjectDetail from "./pages/project";
import { AnimationProvider } from "./provider/animation";
import { TransitionProvider } from "./provider/transition";

const App = () => {

  return (
    <Router>
      <AnimationProvider>
        <Layout>
          <Switch>
            <Route exact path={ROUTER.HOME} component={Home}/>
            <Route path={ROUTER.ABOUT} component={About}/>
            <Route path={ROUTER.CONTACT} component={Contact}/>
            <Route path={ROUTER.AGURI}>
              <TransitionProvider>
                <Aguri/>
              </TransitionProvider>
            </Route>
            <Route path={ROUTER.ALIO} >
              <TransitionProvider>
                <Alio/>
              </TransitionProvider>
            </Route>
            <Route path={ROUTER.FASHION}>
              <TransitionProvider>
                <Fashion/>
              </TransitionProvider>
            </Route>
            <Route path={ROUTER.CAKE} >
              <TransitionProvider>
                <Cake/>
              </TransitionProvider>
            </Route>
            <Route path={ROUTER.BEAUTYBLOG} >
              <TransitionProvider>
                <BeautyBlog/>
              </TransitionProvider>
            </Route>
            <Route path={ROUTER.WORKOUT} >
              <TransitionProvider>
                <Workout/>
              </TransitionProvider>
            </Route>
            
            <Route path={ROUTER.ABOUTTEST} component={Abouttest}/>
            
            <Route path={ROUTER.NOTFOUND} component={NotFound}/>
            <Route path={ROUTER.PROJECT_DETAIL} component={ProjectDetail}/>
            <Route path={ROUTER.DESIGNS} component={Designs}/>
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
