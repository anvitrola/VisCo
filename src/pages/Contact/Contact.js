import Button from "../../components/Button/Button.js";
import FormField from "../../components/FormField/FormField";
import TitleBox from "../../components/TitleBox/TitleBox.js";

import contactImage from "../../images/contact.jpg";

import { Container, Field, Image } from "./Contact.styles";

export default function Contact() {

  return (
    <Container className="animeLeft">
      <TitleBox title={"Contact"} />

      <Image className="animeLeft" src={contactImage} alt="" />

      <form>
        <Field>
          <FormField text={"Nome"} name={"name"} type={"text"} />
        </Field>

        <Field>
          <FormField text={"E-mail"} name={"email"} type={"email"} />
        </Field>

        <Field>
          <FormField text={"Mensagem"} name={"message"} type={"textarea"} />
        </Field>

        <Button text={"Enviar"} />
      </form>
    </Container>
  );
}
