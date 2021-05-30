import { Btn } from "./Button.styles";

export default function Button ({text, type}) {
    return (
        <Btn type={type}>
            {text}
        </Btn>
    )
}
