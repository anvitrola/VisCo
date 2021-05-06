import { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import styles from "./styles.module.scss";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.headerContainer}>
        <h1>VIS co.</h1>
        <NavBar/>
      </header>
    );
  }
}
