import Head from "next/head";
import styled from "styled-components";
export default function Produtos() {
  return (
    <>
      <Head>
        <title>Produtos - PetShop</title>
        <meta name="description" content="Compre produtos para Pets" />
        <meta name="keywords" content="Ração, Brinquedos, Banho,Coleira" />
      </Head>

      <StyledProdutos>
        <h2>Conheça nossos Produtos</h2>
      </StyledProdutos>
    </>
  );
}

const StyledProdutos = styled.section`
  h2::before {
    content: "🎁";
  }
`;
