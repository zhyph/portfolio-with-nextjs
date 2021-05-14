import styled from "styled-components";

export const Center = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  background: rgb(234, 170, 0);
  background: radial-gradient(
    circle,
    rgba(234, 170, 0, 1) 0%,
    rgba(121, 93, 9, 1) 50%,
    rgba(163, 118, 0, 1) 100%
  );
`;

export const Container = styled.div`
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.div`
  overflow: hidden;
  height: 500px;
  width: 100%;
  background: url("/image1.png") center no-repeat;
  background-size: cover;
  border: 1px solid #eaaa00;
  border-radius: 40%;
`;
export const InfoContainer = styled.div`
  text-align: center;
  width: clamp(23ch, 50%, 28ch);
  padding: 0 3rem;
`;
export const Introduction = styled.h1`
  font-size: 3rem;
`;
export const TextBody = styled.p`
  font-size: 1rem;
`;
