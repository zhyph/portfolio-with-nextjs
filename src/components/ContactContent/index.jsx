import React from "react";
import {
  ConnectionsContainer,
  Container,
  Description,
  Email,
  FormContainer,
  Head,
  Icon,
  Info,
  InfoContainer,
  Input,
  SocialIcons,
  StyledButton,
  ContactContainer,
} from "./styles";
import { Box } from "@material-ui/core";

function ContactContent() {
  return (
    <>
      <Container>
        <InfoContainer>
          <Head>Lorem.</Head>
          <Info>Lorem, ipsum dolor.</Info>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            a!
          </Description>
        </InfoContainer>
        <ContactContainer>
          <FormContainer>
            <Input
              fullWidth
              margin="normal"
              label="Your Name"
              variant="outlined"
            ></Input>
            <Input
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
            ></Input>
            <Input
              fullWidth
              margin="normal"
              multiline
              rows={5}
              label="Message"
              variant="outlined"
            ></Input>
            <StyledButton variant="outlined">Send</StyledButton>
          </FormContainer>
          <ConnectionsContainer>
            <Email href="emailto:example@example.com">
              <Icon src="/envelope-square-solid.svg" />
              example@example.com
            </Email>
            <SocialIcons>
              <Icon src="/facebook-f-brands.svg"></Icon>
              <Icon src="/instagram-brands.svg"></Icon>
              <Icon src="/twitter-brands.svg"></Icon>
            </SocialIcons>
          </ConnectionsContainer>
        </ContactContainer>
      </Container>
    </>
  );
}

export default ContactContent;
