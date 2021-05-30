import { useEffect, useState } from "react";

import Button from "../Button/Button.js";
import FormField from "../FormField/FormField";

import contactImage from "../../images/contact.jpg";

import { Container, Field, Image } from "./ContactForm.styles";

export default function ContactForm() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("A");
  }, []);
  useEffect(() => {
    console.log(value);
  }, [value]);
  useEffect(() => {
    console.log("C");
  });

  return (
    <Container>
      <h1>Contato</h1>

      <Image src={contactImage} alt="" />

      <form>
        <Field>
          <FormField text={"Nome"} name={"name"} type={"text"} />
        </Field>

        <Field>
          <FormField text={"E-mail"} name={"email"} type={"email"} />
        </Field>

        <Field>
          <FormField text={"Mensagem"} name={"message"} type={"text"} />
        </Field>

        <Button type={"submit"} text={"Enviar"} />
      </form>
    </Container>
  );
}
