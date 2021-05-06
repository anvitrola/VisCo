import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';

import styles from './styles/App.module.scss';
import "./styles/global.scss";

class App extends React.Component {
  render(){
    return (
      <div className={styles.appContainer}>
        <Header/>
        <ContactForm/>
        <Footer/>
      </div>
    );
  }
}

export default App;
