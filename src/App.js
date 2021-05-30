import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import MainBanner from './components/MainBanner/MainBanner';
import DrinksList from './components/DrinksList/DrinksList';

import { AppContainer } from './styles/App.styles';
import "./styles/global.css";

class App extends React.Component {
  render(){
    return (
      <Router>
        <AppContainer>
          <Header/>
          <Switch>
            <Route exact path="/">
              <MainBanner/>
            </Route>
            <Route path="/contact">
              <ContactForm/>
            </Route>
            <Route path="/menu">
              <DrinksList/>
            </Route>
          </Switch>
          <Footer/>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
