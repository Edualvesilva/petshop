import Container from "@/components/ui/Container";
import styled from "styled-components";
import Head from "next/head";
export default function Post() {
  return (
    <>
      <Head>
        <title>Título do Post - PetSHop</title>
        <meta name="description" content="" />
      </Head>

      <StyledPost>
        <h2>Título do Post</h2>
        <Container>
          <h3>Categoria </h3>
          <p>Descrição</p>
        </Container>
      </StyledPost>
    </>
  );
}

const StyledPost = styled.article`
  h2:before {
    content: "📑 ";
  }
`;
