import { Btn } from "./Button.styles";

export default function Button ({text, type, secondary}) {
    return (
        <Btn type={type} secondary={secondary}>
            {text}
        </Btn>
    )
}
