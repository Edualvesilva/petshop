# PetShop: projeto Next.js

## Branch 05

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
