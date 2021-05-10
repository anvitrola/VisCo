import {Link} from 'react-router-dom';
import {Component} from 'react';
import styles from "./styles.module.scss";

export class NavBar extends Component {
    render() {
        return (
            <nav className={styles.navBarContainer}>
                <ul>
                    <li><Link to="/menu">coquetéis</Link></li>
                    <li><Link to="/about">sobre</Link></li>
                    <li><Link to="/contact">contato</Link></li>
                    <li><Link to="/colaborator">colabore</Link></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
