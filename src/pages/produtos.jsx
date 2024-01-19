import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
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
        <Container>
          <article>
            <h3>Banho</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quod
              illum nam illo, earum temporibus possimus deserunt, totam delectus
              similique iste asperiores impedit? Voluptatum, dignissimos quam?
              Aspernatur perspiciatis quisquam repellendus.
            </p>
          </article>

          <article>
            <h3>Castração</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quod
              illum nam illo, earum temporibus possimus deserunt, totam delectus
              similique iste asperiores impedit? Voluptatum, dignissimos quam?
              Aspernatur perspiciatis quisquam repellendus.
            </p>
          </article>

          <article>
            <h3>Tosar</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quod
              illum nam illo, earum temporibus possimus deserunt, totam delectus
              similique iste asperiores impedit? Voluptatum, dignissimos quam?
              Aspernatur perspiciatis quisquam repellendus.
            </p>
          </article>
        </Container>
      </StyledProdutos>
    </>
  );
}

const StyledProdutos = styled.section`
  h2::before {
    content: "🎁";
  }

  article {
    padding: 1rem;
  }

  @media screen and (min-width: 800px) {
    /* Esta div é o StyledContainer, mas com uma formatação que só vale para esta Página Produtos */
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
