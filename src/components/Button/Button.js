import { Component } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import styles from './styles.module.scss';

export default class Button extends Component {
    render() {
        return (
            <button className={styles.defaultButton}>
                <a>
                    <AiOutlineMenu/>
                </a>
            </button>
        )
    }
}
