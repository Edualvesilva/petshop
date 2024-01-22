import Link from "next/link";
import styled from "styled-components";

export default function ListaPost({ api }) {
  return (
    <StyledListaPosts>
      {api.map((post) => {
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
