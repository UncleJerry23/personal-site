import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './app.css';
import SideBar from './sidebar/SideBar';
import AboutMe from './main/AboutMe';
import Header from './header-footer/Header';
import Projects from './main/Projects';
import AboutSite from './main/AboutSite';
import Why from './main/Why';
import Contact from './main/Contact';
import { getStarredRepos } from '../actions/githubActions';
import Test from './main/Test';

export default function App() {
  const dispatch = useDispatch();
  dispatch(getStarredRepos());

  return (
    <section className={styles.app} >
      <Router >
        <section className={styles.Left}>
          <div className={styles.Header}>
            <Header/>
          </div>
        
          <div className={styles.Main}>
            <Switch>
              <Route exact path="/" component={Test} />
              <Route exact path="/about-me" component={AboutMe} />
              <Route exact path="/about-site" component={AboutSite} />
              <Route exact path="/why" component={Why} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>

        </section>

        <div className={styles.Sidebar}>
          <SideBar />
        </div>
      </Router>
    </section>
  );
}
