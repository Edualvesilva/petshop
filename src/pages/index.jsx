import Head from "next/head";
import styled from "styled-components";
import ListaPost from "@/components/ListaPost";
import { useEffect, useState } from "react";

export default function Home() {
  const [ListaDePost, setListaPost] = useState([]);
  useEffect(() => {
    const conexao = async () => {
      try {
        const resposta = await fetch(`http://10.20.46.38:2112/posts/`);
        const dados = await resposta.json();
        setListaPost(dados);
      } catch (error) {
        console.log("Erro ao carregar");
      }
    };
    conexao();
  }),
    [];
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
