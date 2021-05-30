import { Container, Title, Subtitle } from './TitleBox.styles';

function TitleBox({title, subtitle}) {
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <hr/>
        </Container>
    )
}

export default TitleBox
