import { Component } from 'react';
import styles from "./styles.module.scss";

export class NavBar extends Component {
    render() {
        return (
            <nav className={styles.navBarContainer}>
                <ul>
                    <li>coquetéis</li>
                    <li>sobre</li>
                    <li>contato</li>
                    <li>colabore</li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
