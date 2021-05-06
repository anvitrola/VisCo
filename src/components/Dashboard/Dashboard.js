import React, { Component } from 'react';
import styles from './styles.module.scss';
import DrinkCard from '../DrinkCard/DrinkCard';

export default class Dashboard extends Component {
    render() {
        return (
            <main className={styles.dashboard}>
                <DrinkCard/>
            </main>
        )
    }
}
