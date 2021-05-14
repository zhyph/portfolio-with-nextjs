import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background: url("/image2.png") no-repeat center center fixed;
  background-size: cover;
  display: grid;
  place-items: center;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  color: #fff;
`;

export const MainText = styled.p`
  font-size: 5rem;
  margin: 0;
`;
export const Description = styled.p`
  border-top: 1px solid pink;
  font-size: 1.2rem;
  padding: 5px 0;
  margin: 0;
`;
