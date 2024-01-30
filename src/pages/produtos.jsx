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
              Dar banho no seu pet é uma maneira importante de garantir a saúde
              e o bem-estar do seu companheiro peludo. Comece molhando
              suavemente o pelo do seu pet com água morna. Aplique o shampoo,
              massageando delicadamente para criar uma espuma suave. Preste
              atenção especial às áreas propensas a sujeira, como patas e
              barriga
            </p>
          </article>

          <article>
            <h3>Castração</h3>
            <p>
              A castração é um procedimento veterinário com benefícios
              significativos para a saúde e o comportamento dos animais de
              estimação. Além de controlar a reprodução, a castração também
              ajuda a prevenir certos problemas de saúde, como câncer de mama e
              doenças uterinas em fêmeas, e problemas na próstata em machos.
            </p>
          </article>

          <article>
            <h3>Tosar</h3>
            <p>
              A tosa é um cuidado essencial para muitas raças de animais de
              estimação, proporcionando benefícios tanto estéticos quanto de
              saúde. O comprimento e o estilo da tosa podem variar de acordo com
              a raça do pet, a estação do ano e as preferências dos tutores.
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
