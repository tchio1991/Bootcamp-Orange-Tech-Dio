import logo from "../../assets/logo.svg";

import Button from "../Button";

import {
  Container,
  Row,
  Input,
  Menu,
  BuscarInputContainer,
  MenuRight,
  UserPicture,
  Wrapper
} from "./styles";

export default function Header({autenticado, handleClickSignIn }) {
  
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn}/>
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}
