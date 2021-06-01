import { Label, Input } from "./FormField.styles";

export default function FormField({ text, name, register, type, holder, required }) {
  return (
    <>
      <Label htmlFor={name}>{text}</Label>
      <Input
        type={type}
        name={name}
        placeholder={holder}
        required={required}
      />
    </>
  );
}

