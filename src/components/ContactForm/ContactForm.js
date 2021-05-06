import { Component } from "react";
import contactImage from "../../images/contact.jpg";
import styles from "./styles.module.scss";

export default class signInForm extends Component {
  render() {
    return (
      <div className={styles.formContainer} >
        <h1>Contato</h1>

        <img src={contactImage} alt="" className={styles.contactImage}/>
        
        <form>
          <div className={styles.formFields}>
            <label htmlFor="userName">Nome</label>
            <input type="text" id="userName" />
          </div>

          <div className={styles.formFields}>
            <label htmlFor="userEmail">E-mail</label>
            <input type="text" id="userEmail" />
          </div>

          <div className={styles.formFields}>
            <label htmlFor="userPassword">Mensagem</label>
            <input type="text" id="userPassword" />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  };
}