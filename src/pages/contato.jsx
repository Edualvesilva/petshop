import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import { useForm } from "react-hook-form";
import serverApi from "./api/server";
import { useRouter } from "next/router";
export default function Contato() {
  const { register, handleSubmit } = useForm();
  let router = useRouter();

  const enviarContato = async (dados) => {
    const { nome, email, mensagem } = dados;
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };

    try {
      await fetch(`${serverApi}/contatos.json`, opcoes);
      alert("Dados Enviados!");
      router.push("/");
    } catch (error) {
      console.log("Deu ruim no envio: " + error.message);
    }
  };
  return (
    <>
      <Head>
        <title>Contato - PetShop</title>
        <meta name="description" content="Entre em contato" />
        <meta name="keywords" content="Contato PetShop" />
      </Head>
      <StyledContato>
        <h2>Fale Conosco</h2>
        <Container>
          <form
            action=""
            method="post"
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div>
              <label htmlFor="nome">Nome: </label>
              <input {...register("nome")} type="text" name="nome" id="nome" />
            </div>

            <div>
              <label htmlFor="email">Email: </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
              />
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem: </label>
              <textarea
                {...register("mensagem")}
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols={30}
                rows={8}
              ></textarea>
            </div>
            <div>
              <button type="submit">Enviar Mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}

const StyledContato = styled.section`
  h2::before {
    content: "💌";
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
  }

  form div {
    margin-bottom: 16px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #4caf50;
    color: #ffffff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
`;
