import { Container, Img, Title } from "./Pages.styled";
import img from "../img/contacts.png"

export default function Home() {
  return (
    <Container>
      <Img src={img} alt="Contacts"></Img>
      <Title>Contacts manager</Title>
    </Container>
  );
}
