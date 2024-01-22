# PetShop: projeto Next.js

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
