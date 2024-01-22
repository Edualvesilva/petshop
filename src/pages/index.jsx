import Head from "next/head";
import styled from "styled-components";
import ListaPost from "@/components/ListaPost";
export default function Home() {
  return (
    <>
      <Head>
        <title>PetShop 2024</title>
        <meta name="description" content="Página sobre Petshop" />
        <meta name="keywords" content="Site de pets, Cachorro,Gato" />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>
        <ListaPost posts={[]} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;
