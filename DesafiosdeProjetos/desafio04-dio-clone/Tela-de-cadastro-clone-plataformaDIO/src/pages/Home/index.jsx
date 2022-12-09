import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Header from "../../components/Header";

import banner from '../../assets/banner.svg'

import { Container, TextContent, Title, TitleHighlight } from "./styles";

export default function Home() {
  const navigate = useNavigate();

  function handleClickSignIn() {
    navigate("/login");
  }
  return (
    <>
      <Header handleClickSignIn={handleClickSignIn} />

      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>

          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>

          <Button
            title={"Começar agora"}
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        
        <div>
          <img src={banner} alt="Banner principal" />
        </div>
      </Container>
    </>
  );
}
