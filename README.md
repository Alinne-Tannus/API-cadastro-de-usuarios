📚 API de Cadastro de Usuários
-----------------------------------

📚 API de Cadastro de Usuários

Este projeto é a parte **backend** de uma aplicação **full stack** para cadastro de usuários. Ele foi desenvolvido com **Node.js**, **Express** e **Prisma ORM**, conectado ao banco de dados **MongoDB**.

A API oferece funcionalidades completas de **CRUD** (Create, Read, Update, Delete) com suporte a filtros, geração de dados fictícios e limpeza do banco.

⚙️ Tecnologias Utilizadas
---------------------

Node.js  (https://nodejs.org/pt)

Express (https://expressjs.com)

Prisma ORM (https://www.prisma.io) 

MongoDB (https://www.mongodb.com)

@faker-js/faker (para geração de dados fictícios) (https://github.com/faker-js/faker)

JavaScript ESModules (https://nodejs.org/api/esm.html)


🚀 Funcionalidades
------------------------

✅ Criar usuários

✅ Listar todos os usuários

✅ Filtrar usuários por nome, e-mail ou idade

✅ Atualizar dados de um usuário

✅ Deletar usuário por ID

✅ Gerar usuários fictícios com dados aleatórios

✅ Deleta todos os usuários no banco pelo clearData.js


📦 Instalação
-------------------
```bash
git clone https://github.com/seu-usuario/api-cadastro-de-usuarios.git
```
```
cd api-cadastro-de-usuarios
```

```
npm install
```



▶️ Execução
-------------------
Para rodar o servidor com Node.js:


```
npm run dev
```



Para gerar um usuário aleatório no banco:


```
node criador-de-users.mjs
```

Para deletar todos os usuários no banco:

```
node clearData.js
```


🔧 Configuração do Prisma
-----------------------
Para gerar o client Prisma:


```
npx prisma generate
```



🧪 Exemplos de Requisições
-----------------------------
🔍 GET /users
  * Lista todos os usuários.
    
  * Suporta filtros:

  ?name=valor

  ?email=exemplo@

  ?age=valor



➕ POST /users
-------------------------------
  * Cria um novo usuário:


```json
{
"name": "Maria Silva",
"email": "maria@email.com",
"age": 30
}
```

✏️ PUT /users/:id
------------------

  * Atualiza os dados de um usuário.


🗑️ DELETE /users/:id
------------------

  * Remove um usuário do banco de dados.


🎨 Front-end
-----------------------
Este projeto possui uma interface visual feita com:

* ⚛️ React.js

* 🎨 CSS (puro)

🔗 Acesse o repositório do front-end:
👉 Projeto Front-end - (Cadastro de Usuários)[https://github.com/Alinne-Tannus/cadastro-de-usuarios]

👩‍💻 Feito por
--------
(Alinne Tannus)[https://github.com/Alinne-Tannus]
