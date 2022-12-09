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

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  width: 20rem;
  margin-bottom: 1.25rem;
  line-height: 2.75rem;

  color: #fff;
`;

export const TitleHighlight = styled.span`
  color: #e4105d; ;
`;

export const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;
  width: 26.25rem;

  margin-bottom: 1.25rem;

  color: #fff;
`;
