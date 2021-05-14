import React, { useState } from "react";
import { NavLinks, StoreName, StyledLink, MainHeader } from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [pathName, setPathName] = useState(router.pathname);
  const newPathName = () => {
    setPathName(router.pathname);
  };

  return (
    <MainHeader>
      <StoreName>Priscila</StoreName>
      <NavLinks>
        <Link href="/" passHref>
          <StyledLink onClick={newPathName} pathname={pathName}>
            Inicio
          </StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink onClick={newPathName} pathname={pathName}>
            Sobre
          </StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink onClick={newPathName} pathname={pathName}>
            Contatos
          </StyledLink>
        </Link>
      </NavLinks>
    </MainHeader>
  );
}

export default Header;
