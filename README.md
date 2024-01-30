# PetShop: projeto Next.js

## Branch 17-migração-api-fake-firebase-json

### Firebase

Firebase é uma plataforma de serviços web (Web Services) com uma série de funcionalidades de Back-end úteis para aplicações (web,apps,jogos).

No caso do PetSho, criamos um projeto Firebase e nele adicionamos um banco de dados chamado "Firebase Realtime Database" para utilização como API JSON.

O RealTime Database é um banco de dados `NoSQL`, ou seja, um banco de dados **não-relacional**. Ele é baseado em documentos no formato JSON contendo objetos de dados.

link para Firebase:
https://firebase.google.com

## Branch 12-usando-rotas-dinâmicas-para-abrir-post

### Recursos necessários

- Pages/rotas **dinâmicas** utilizando subpastas (posts) e arquivo nomeado com **colchetes** indicando o nome(s) do(s) parâmetros. No caso, foi criado o `[id].jsx`

- `getStaticProps`: necessário para carregar os dados da API de acordo com o parâmetro (usando a prop `{params}`) e gerar o HTML via SSR.

- `getStaticPaths`: necessário para gerar os caminhos dinâmicos no momento do acesso à página.

### Documentação oficial sobre SSR

https://nextjs.org/docs/pages/building-your-application/data-fetching

### Resumo sobre as funções

`getStaticProps`: executada no lado do servidor (SSR - Server Side Rendering), portanto logs,erros,lógicas,ações/comandos NÃO aparecem para o usuário (mas aparecem no terminal para o Programador(a)).

Na maioria dos casos usaremos `getStaticProps` para este tipo de processamento em que os dados são consumidos (Data Fetching) atráves de uma API, já que esta função tem uma perfomance melhor por fazer o processamento apenas no momento da requisição.

Também há a função `getServerSideProps` que pode ser útil para páginas cujos dados mudam frequentemente ou são diferentes para cada usuário (como no caso de uso de dados de geolocalização).

## Branch 11-desafio-consumindo-dados-usando-modo-react

Desafio:
Você precisará programar a página inicial (arquivo index) para que, através da API Fake, os dados dos posts sejam consumidos e carregados/repassados ao ListaPosts.

Para isso, você precisa verificar qual é a URL do Endpoint da API e programar recursos utilizando useState e useEffect.
No caso do useState, crie as constantes listaDePosts e setListaDePosts.
No caso do useEffect, programe o necessário para usar a função fetch.

## Branch 10-usando-json-server-como-fake-api

### Etapas

1. Instalação do `json-server` : `npm install -g json-server`
2. Colocação do arquivo `db.json` na raíz do projeto (este arquivo funcionará como um banco de dados para a API)
3. Pegar o IP da máquina usando `ipconfig`
4. Adicionar um script npm no `package.json` com a seguinte configuração:

`"api" : "json-server --host IP.DA.SUA.MAQUINA db.json --port NÚMERO"`

5. Executar a API usando `npm run api`

## Branch 9-desafio-componentização

- Crie na pasta `components` um component chamado `ListPost`
- Mofifique a página para que ela utilize este componente.

**Atenção** toda a lógica/programação feita em relação ao <StyledListaPosts> deve ser migrada para o novo componente, Exceto o `import` do `arrayPost` que deve continuar na página inicial.

portanto, você deverá repassar o arrayPosts via props para o novo componente.

### IMPORTANTE!

Após instalar o `styled-components`, ative o suporte à compilação dele pelo Next.js modificando o arquivo `next.config.js`:

```javascript
const nextConfig = {
  reactStrictMode: true,
  // Adicione estas linhas:
  compiler: {
    styledComponents: true,
  },
};
```

## Recursos utilizados

- Next.js
- API fake/local
- API via firebase Realtime Database
- Componentes
- Rotas
- Map,filter
- Manipulação de formulário
- Publicação na vercel e na Netlify
