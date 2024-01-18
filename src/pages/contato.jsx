import Head from "next/head";
import styled from "styled-components";
export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato - PetShop</title>
        <meta name="description" content="Entre em contato" />
        <meta name="keywords" content="Contato PetShop" />
      </Head>
      <StyledContato>
        <h2>Fale Conosco</h2>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2::before {
    content: "💌";
  }
`;
