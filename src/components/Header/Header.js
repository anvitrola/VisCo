import { Component } from 'react';
import Button from '../Button/Button';
import styles from "./styles.module.scss";

export default class Header extends Component {
  render() {
    return (
      <header className={styles.headerContainer}>
        <h1>VIS co.</h1>
        <Button/>
      </header>
    );
  }
}
