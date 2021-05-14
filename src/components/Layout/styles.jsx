import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const ContentContainer = styled.main`
  border-top: 1px solid gold;
  border-bottom: 1px solid gold;
`;

export const Footer = styled.footer`
  padding: 2rem;
  background-color: #00e93a;
`;
