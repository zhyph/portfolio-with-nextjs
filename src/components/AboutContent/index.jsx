import React from "react";
import {
  Container,
  Image,
  InfoContainer,
  Introduction,
  TextBody,
  Center,
} from "./styles";

function AboutContent() {
  return (
    <Center>
      <Container>
        <Image />
        <InfoContainer>
          <Introduction>Lorem, ipsum.</Introduction>
          <TextBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, nobis.
          </TextBody>
        </InfoContainer>
      </Container>
    </Center>
  );
}

export default AboutContent;
