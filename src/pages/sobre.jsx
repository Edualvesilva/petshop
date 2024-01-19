import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
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

        <Container>
          <h3>Missão</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            nostrum natus nam non incidunt perspiciatis voluptatem distinctio
            aperiam aliquam vero. Vitae, fugit! Autem impedit repellat dolorum
            eum optio cum ratione?
          </p>

          <h3>Visão</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            pariatur laudantium autem, dolore explicabo laboriosam sunt delectus
            neque quis provident cumque corrupti nihil ipsum eligendi nisi
            eveniet ex blanditiis ipsam.
          </p>

          <h3>Valores</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            exercitationem assumenda hic debitis aliquam quasi tempore nisi
            modi, voluptas minima asperiores a animi, reprehenderit esse eaque
            eos, ex laudantium? Ea.
          </p>
        </Container>
      </StyledSobre>
    </>
  );
}

const StyledSobre = styled.section`
  h2::before {
    content: "💡";
  }
`;
