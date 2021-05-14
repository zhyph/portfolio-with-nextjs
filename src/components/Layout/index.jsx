import React from "react";
import Header from "../Header";
import { ContentContainer, Container, Footer } from "./styles";

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer>footer</Footer>
    </Container>
  );
}

export default Layout;
