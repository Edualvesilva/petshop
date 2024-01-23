import Head from "next/head";
import styled from "styled-components";
import ListaPost from "@/components/ListaPost";
import { useState } from "react";

/* FUNÇÂO getStaticProps
Utilizada para execução de código server-side (neste caso, fetch na API) com o objetivo de gerar props com os dados processados  */
export async function getStaticProps() {
  try {
    const resposta = await fetch(`http://10.20.46.38:2112/posts`);
    const dados = await resposta.json();
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.staus} - ${resposta.statusText}`);
    }

    /* Após o processamento (desde que não hajá erros), a getStaticProps retorna um objeto com uma Propriedade chamada "props", e nesta propriedade colocamos um objeto com as props que queremos usar. No caso, usamos uma prop "posts" (pode ter qualquer nome) e é nela que colocamos os dados. */
    return {
      props: {
        posts: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
  }
}

export default function Home({ posts }) {
  const [ListaDePost, setListaPost] = useState(posts);

  return (
    <>
      <Head>
        <title>PetShop 2024</title>
        <meta name="description" content="Página sobre Petshop" />
        <meta name="keywords" content="Site de pets, Cachorro,Gato" />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>
        <ListaPost posts={ListaDePost} />
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;
