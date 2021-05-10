import React, { Component } from 'react';
import banner from "../../images/banner1.png";
import styles from "./styles.module.scss";


export default class MainBanner extends Component {
    render() {
        return (
            <main className={styles.mainBannerArea}>
                <img src={banner} alt="Imagem de um bar florido"></img>
            </main>
        )
    }
}
