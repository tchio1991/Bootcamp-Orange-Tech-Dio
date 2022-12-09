import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Header from "../../components/Header/";
import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

import { MdLock, MdMail } from "react-icons/md";

import { api } from "../../services/api";

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  async function onSubmit(formData) {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.senha}`
      );

      if (data.length && data[0].id) {
        navigate("/feed");
        return;
      }
      alert("Usuário ou senha inválidos.");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(errors);

  return (
    <>
      <Header />

      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="E-mail"
                leftIcon={<MdMail />}
                name="email"
                control={control}
              />

              {errors.email && <span>E-mail obrigatório</span>}

              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />

              {errors.senha && <span>Senha obrigatória</span>}

              <Button title="Entrar" variant="secondary" type="submit" />
            </form>

            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
}
