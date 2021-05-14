import styled from "styled-components";
import { Button, TextField, Box } from "@material-ui/core";

export const Container = styled.div`
  display: grid;
  place-items: center;
`;
export const InfoContainer = styled.div`
  text-align: center;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 70%;
`;
export const Head = styled.h1`
  box-sizing: content-box;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 300;
  border-bottom: 1px solid black;
  margin-bottom: 0;
  padding-bottom: 1rem;
`;
export const Info = styled.p`
  font-size: 1.5rem;
  margin-top: 0;
  padding-top: 1rem;
`;
export const Description = styled.p`
  margin-bottom: 4rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
export const Input = styled(TextField)`
  /* margin: 1rem; */
`;
export const StyledButton = styled(Button)`
  width: 30%;
`;
export const ConnectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;
export const Email = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  text-decoration: none;
  color: black;
  :hover {
    color: grey;
  }
  img {
    padding-right: 10px;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 2rem;
  border-top: 1px solid black;
`;
export const Icon = styled.img`
  cursor: pointer;
  height: 30px;
`;
