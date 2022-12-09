import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 3rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #151515;
`;

export const BuscarInputContainer = styled.div`
  width: 17rem;
  height: 1.875rem;
  padding: 0.125rem 0.3125rem;
  margin: 0 0.75rem;

  background: #2d2d37;
  border-radius: 0.5rem;
`;

export const Menu = styled.a`
  margin-right: 0.75rem;

  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5625rem;
  color: #fff;
`;

export const MenuRight = styled.a`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5625rem;
  color: #fff;
  text-decoration: none;
`;

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;

  border-radius: 1.375rem;
  border: 3px solid #fff;
`;

export const Input = styled.input`
  flex: 1;
  border: 0;

  color: #fff;
  background: transparent;
`;
