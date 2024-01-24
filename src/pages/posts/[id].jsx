import Container from "@/components/ui/Container";
import styled from "styled-components";
import Head from "next/head";
import serverApi from "../api/server";

export async function getStaticProps({ params }) {
  /* Utilizamos a prop params do getStaticProps para poder ter acesso aos parâmetros dinâmicos da rota condigurada nos links da Lista de Posts. Usamos a desestruturação para obter de forma direta o parâmetro chamado "id".  */

  const { id } = params;
  console.log(id);

  try {
    // const resposta = await fetch(`${serverApi}/posts/${id}`);
    const resposta = await fetch(`${serverApi}/posts/${id}`);
    if (!resposta.ok) {
      throw new Error(`Erro: ${resposta.staus} - ${resposta.statusText}`);
    }

    const dados = await resposta.json();

    return {
      props: {
        post: dados,
      },
    };
  } catch (error) {
    console.error("Deu ruim: " + error.message);
    return { notFound: true };
  }
}

/* getStaticPaths é obrigatória quando se trata de trabalhar com páginas/rotas dinâmicas,ou seja, que dependem de parâmetros para serem construídos. */
export async function getStaticPaths() {
  return {
    /* paths fica vazio pois todos os caminhos devem ser gerados sob demanda, ou seja, no momento que a página for aberta.*/
    paths: [],

    /* fallback fica como "blocking" para garantir que a página somente será renderizada após a conclusão da geração dos caminhos e dos dados estáticos */
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  const tituloPagina = `${post.titulo} - PetShop`;
  return (
    <>
      <Head>
        <title> {tituloPagina} - PetSHop</title>
        <meta name="description" content={post.descricao} />
      </Head>

      <StyledPost>
        <h2>{post.titulo}</h2>
        <Container>
          <h3>{post.categoria} </h3>
          <p>{post.descricao}</p>
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
