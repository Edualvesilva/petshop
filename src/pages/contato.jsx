import Head from "next/head";
import styled from "styled-components";
import Container from "@/components/ui/Container";
import { useForm } from "react-hook-form";
import serverApi from "./api/server";
import { useRouter } from "next/router";
export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
              <input
                {...register("nome", { required: true })}
                type="text"
                name="nome"
                id="nome"
              />
            </div>

            {/*  ? é conhecido como "Optional chaining" [encadeamento opcional] é usado para evitar erros caso uma propriedade de um objeto seja null ou undefined. Caso não seja null/undefined,aí sim verificamos se o type é required para seguir com a validação; */}

            {errors.nome?.type == "required" && <p>Você deve digitar o nome</p>}
            <div>
              <label htmlFor="email">Email: </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
              />
            </div>
            {errors.email?.type == "required" && (
              <p>Você deve digitar o Email</p>
            )}
            <div>
              <label htmlFor="mensagem">Mensagem: </label>
              <textarea
                {...register("mensagem", { required: true, minLength: 20 })}
                maxLength={500}
                name="mensagem"
                id="mensagem"
                cols={30}
                rows={8}
              ></textarea>
            </div>
            {errors.mensagem?.type == "required" && (
              <p>Você deve digitar a sua Mensagem</p>
            )}

            {errors.mensagem?.type == "minLength" && (
              <p>Escreva pelo menos 20 caracteres</p>
            )}
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

    /* Seletor + significa "elemento adjacente" ou seja, pegar os parágrafos que estão depois da div. */
    & + p {
      color: red;
      font-size: 0.8rem;
      font-style: italic;
    }
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
