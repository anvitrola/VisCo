import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import MainBanner from './components/MainBanner/MainBanner';

import styles from './styles/App.module.scss';
import "./styles/global.scss";

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className={styles.appContainer}>
          <Header/>
          <Switch>
            <Route exact path="/">
              <MainBanner/>
            </Route>
            <Route path="/contact">
              <ContactForm/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
