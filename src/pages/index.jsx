import Head from "next/head";
import styled from "styled-components";
import ListaPost from "@/components/ListaPost";
import { useState } from "react";
import serverApi from "./api/server";

/* FUNÇÂO getStaticProps
Utilizada para execução de código server-side (neste caso, fetch na API) com o objetivo de gerar props com os dados processados  */
export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.staus} - ${resposta.statusText}`);
    }

    /* Extraindo as categorias dos posts para um novo array */
    const categorias = dados.map((post) => post.categoria);

    /* Gerando uma array de categorias ÚNICAS */
    const categoriasUnicas = [...new Set(categorias)];

    /* Após o processamento (desde que não hajá erros), a getStaticProps retorna um objeto com uma Propriedade chamada "props", e nesta propriedade colocamos um objeto com as props que queremos usar. No caso, usamos uma prop "posts" (pode ter qualquer nome) e é nela que colocamos os dados. */
    return {
      props: {
        posts: dados,
        categorias: categoriasUnicas, // Provisório
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return { notFound: true };
  }
}

export default function Home({ posts, categorias }) {
  const [ListaDePost, setListaPost] = useState(posts);

  const aplicarFiltro = (event) => {
    const categoriaSelecionada = event.currentTarget.innerText;

    const categoriaFiltrada = posts.filter((post) => {
      return post.categoria === categoriaSelecionada;
    });
    setListaPost(categoriaFiltrada);
  };
  return (
    <>
      <Head>
        <title>PetShop 2024</title>
        <meta name="description" content="Página sobre Petshop" />
        <meta name="keywords" content="Site de pets, Cachorro,Gato" />
      </Head>
      <StyledHome>
        <h2>Pet Notícias</h2>

        <StyledCategorias>
          {categorias.map((categoria, indice) => {
            return (
              <button onClick={aplicarFiltro} key={indice}>
                {categoria}
              </button>
            );
          })}
        </StyledCategorias>
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

const StyledCategorias = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  button {
    display: inline-block;
    padding: 5px 10px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid #3498db;
    border-radius: 5px;
    color: #fff;
    background-color: #3498db;
    transition: background-color 0.3s, color 0.3s;
  }

  button:hover {
    background-color: #2980b9;
    border-color: #2980b9;
  }
`;
