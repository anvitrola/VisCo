import { Component } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from './styles.module.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footerContainer}>
                <div>
                    <p>2021 &copy; by anvitrola</p>
                </div>
                <div>
                    <a href="linkedin.com/in/anvitrola/">
                        <FaLinkedin/>
                    </a>
                    <a href="https://github.com/anvitrola">
                        <FaGithub/>
                    </a>
                </div>
            </footer>
        )
    }
}
