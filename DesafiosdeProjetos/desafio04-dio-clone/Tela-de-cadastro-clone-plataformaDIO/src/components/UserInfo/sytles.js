import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.375rem;
  border: .1875rem solid #fff;
  margin-right: 0.75rem;
`;

export const NameText = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #fff;
`;

export const Progress = styled.div`
  width: 11.25rem;
  height: .375rem;
  background-color: #fff;
  border-radius: .1875rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    height: .375rem;
    border-radius: .1875rem;
    background-color: #23dd7a;
  }
`;
