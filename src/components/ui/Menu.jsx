import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
export default function Menu() {
  const PathName = usePathname();
  return (
    <>
      <StyledNav>
        <Link href="/" className={PathName === "/" ? "active" : ""}>
          Blog
        </Link>
        <Link
          href="/produtos"
          className={PathName === "/produtos" ? "active" : ""}
        >
          Produtos
        </Link>
        <Link href="/sobre" className={PathName === "/sobre" ? "active" : ""}>
          Sobre
        </Link>
        <Link
          href="/contato"
          className={PathName === "/contato" ? "active" : ""}
        >
          Contato
        </Link>
      </StyledNav>
    </>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    background-color: var(--cor-primaria-fundo);
    color: var(--cor-primaria);
    padding: 0.8rem 1rem;
    &:first-child {
      border-top-left-radius: var(--borda-arredondada);
      border-bottom-left-radius: var(--borda-arredondada);
    }
    &:last-child {
      border-top-right-radius: var(--borda-arredondada);
      border-bottom-right-radius: var(--borda-arredondada);
    }

    &:hover,
    &:focus {
      background-color: var(--cor-primaria-fundo-hover);
    }
    &.active {
      color: #2f88a8;
    }
    @media screen and (min-width: 700px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;
