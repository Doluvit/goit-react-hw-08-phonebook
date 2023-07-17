import { Container, Img, Title } from "./Pages.styled";
import img from "../img/contacts.png"
import { MainContainer } from "components/App.styled";

export default function Home() {
  return (
    <Container>
      <MainContainer>
        <Img src={img} alt="Contacts"></Img>
        <Title>Contacts manager</Title>
      </MainContainer>
    </Container>
  );
}
