import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import arrayPosts from "./api/array-posts";
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
        <StyledListaPosts>
          {arrayPosts.map((post) => {
            return (
              <article key={post.id}>
                <Link href="">
                  <h3>{post.titulo}</h3>
                  <p>{post.subtitulo}</p>
                </Link>
              </article>
            );
          })}
        </StyledListaPosts>
      </StyledHome>
    </>
  );
}

const StyledHome = styled.section`
  h2::before {
    content: "📰";
  }
`;

const StyledListaPosts = styled.div`
  article {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--borda-arredondada);
    border-radius: var(--borda-arredondada);
    transition: 200ms;

    & a {
      text-decoration: none;
      color: black;

      &:hover,
      &:focus {
        color: #0066ff;
      }
    }
  }

  article:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    article {
      width: 49%;
    }
  }
`;
