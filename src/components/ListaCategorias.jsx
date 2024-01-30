import styled from "styled-components";

function ListaCategorias({
  categorias,
  categoriaAtiva,
  aplicarFiltro,
  limparFiltro,
  filtroAtivo,
}) {
  return (
    <StyledCategorias>
      {categorias.map((categoria, indice) => (
        <button
          className={categoria === categoriaAtiva ? "ativo" : ""}
          onClick={aplicarFiltro}
          key={indice}
        >
          {categoria}
        </button>
      ))}

      {/* Se filtroAtivo estiver ativo logo o botão não aparece */}
      {filtroAtivo && (
        <button onClick={limparFiltro} className="limpar">
          Limpar filtro
        </button>
      )}
    </StyledCategorias>
  );
}

const StyledCategorias = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    display: inline-block;
    padding: 5px 10px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    cursor: pointer;
    border: 2px solid #3498db;
    border-radius: 5px;
    color: #fff;
    background-color: #3498db;
    transition: background-color 0.3s, color 0.3s;

    &.ativo {
      background-color: var(--cor-primaria-fundo);
    }
  }

  button:hover {
    background-color: #2980b9;
    border-color: #2980b9;
  }

  .limpar {
    background-color: gray;
    border: gray;
    &:hover {
      background-color: slategray;
    }
    &::before {
      content: "🧹";
    }
  }
`;

export default ListaCategorias;
