import Head from "next/head";
import styled from "styled-components";
import ListaPost from "@/components/ListaPost";
import { useState } from "react";
import serverApi from "./api/server";
import ListaCategorias from "@/components/ListaCategorias";

/* FUNÇÂO getStaticProps
Utilizada para execução de código server-side (neste caso, fetch na API) com o objetivo de gerar props com os dados processados  */
export async function getStaticProps() {
  try {
    const resposta = await fetch(`${serverApi}/posts.json`);
    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.staus} - ${resposta.statusText}`);
    }

    /* Colocando os dados dos objetos dentro de um array
      1) Object.keys(dados): extrair as chaves/id de cada objeto para um array.
    
      2) Map no array chaves, em que retornamos um novo objeto.

      3) Cada novo objeto (representado por post) é criado com os dados existentes (por isso usamos o spread)

      4) No caso do id, atribuimos a própria chave de cada objeto
    */
    const arrayDePosts = Object.keys(dados).map((post) => {
      return {
        ...dados[post],
        id: post,
      };
    });

    /* Extraindo as categorias dos posts para um novo array */
    const categorias = arrayDePosts.map((post) => post.categoria);

    /* Gerando uma array de categorias ÚNICAS */
    const categoriasUnicas = [...new Set(categorias)];

    /* Após o processamento (desde que não hajá erros), a getStaticProps retorna um objeto com uma Propriedade chamada "props", e nesta propriedade colocamos um objeto com as props que queremos usar. No caso, usamos uma prop "posts" (pode ter qualquer nome) e é nela que colocamos os dados. */
    return {
      props: {
        posts: arrayDePosts,
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
  const [filtroAtivo, setFiltroAtivo] = useState(false);
  const [categoriaAtiva, setcategoriaAtiva] = useState("");

  const aplicarFiltro = (event) => {
    const categoriaSelecionada = event.currentTarget.textContent;

    const categoriaFiltrada = posts.filter((post) => {
      return post.categoria === categoriaSelecionada;
    });

    // Sinalizando o state como FiltroAtivo(true)
    setFiltroAtivo(true);
    setListaPost(categoriaFiltrada);

    // Sinalizando o state com o texto/categoria escolhida
    setcategoriaAtiva(categoriaSelecionada);
  };

  const limparFiltro = () => {
    // Sinalizando o state como filtro inativo (false)
    setFiltroAtivo(false);

    // Atualizando o state de listaDePost para os posts originais
    setListaPost(posts);

    /* Atualizando o state da categoria ativa para vazio "" */
    setcategoriaAtiva("");
  };
  return (
    <>
      <Head>
        <title>PetShop 2024</title>
        <meta name="description" content="Página sobre Petshop" />
        <meta name="keywords" content="Site de pets, Cachorro,Gato" />
      </Head>
      <StyledHome>
        <h2>Pet Notícias {ListaDePost.length}</h2>
        <ListaCategorias
          categorias={categorias}
          aplicarFiltro={aplicarFiltro}
          categoriaAtiva={categoriaAtiva}
          limparFiltro={limparFiltro}
          filtroAtivo={filtroAtivo}
        />

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
