import Head from "next/head";
import styled from "styled-components";
export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - PetShop</title>
        <meta name="description" content="Sobre nossa causa" />
        <meta name="keywords" content="PetShop" />
      </Head>
      <StyledSobre>
        <h2>Sobre nosso PetShop</h2>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡";
  }
`;
