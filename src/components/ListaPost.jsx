import Link from "next/link";
import styled from "styled-components";

export default function ListaPost({ posts }) {
  /* Se não houver posts (ou seja, posts está vazio/zerado) 
  em vez de retornar com o map, return uma mensagem provisória
  para o usuário.
  */
  if (posts.length === 0)
    return <h3 style={{ textAlign: "center" }}>Ainda não há Posts!</h3>;
  return (
    <StyledListaPosts>
      {posts.map((post) => {
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
  );
}

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
