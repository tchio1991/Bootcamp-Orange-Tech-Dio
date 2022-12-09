import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 18.75rem;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.25rem;
`

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  max-width: 90%;
  margin-bottom: 1.25rem;
  line-height: 2.75rem;

  color: #fff;
`;

export const TitleLogin = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.75;
  margin-bottom: .5rem;

  color: #fff;
`;

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5625rem;
    margin-bottom: 2.1875rem;
`

export const EsqueciText  = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.1875rem;

    color: #E5E044;
    cursor: pointer;
` 


export const CriarText =  styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: .875rem;
    line-height: 1.1875rem;

    color: #23DD7A;
    cursor: pointer
`