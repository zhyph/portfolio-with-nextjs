import styled from "styled-components";

const ActiveLink = () => {
  const router = useRouter();
  return router.pathname;
};

export const MainHeader = styled.header`
  padding: 1.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StoreName = styled.div`
  color: #eaaa00;
  font-size: 4rem;
  letter-spacing: 1rem;
  font-family: "Dancing Script", cursive;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-evenly;
`;

export const StyledLink = styled.a`
  color: ${(props) => (props.href === props.pathname ? "#a37600" : "#eaaa00")};
  text-decoration: none;
  padding-top: 20px;
  font-size: 1.3rem;
  :hover {
    text-decoration: underline;
    color: #a37600;
  }
`;
