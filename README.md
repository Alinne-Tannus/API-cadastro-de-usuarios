📚 API de Cadastro de Usuários
-----------------------------------

Este projeto é uma API RESTful desenvolvida com Node.js, Express e Prisma ORM, conectada ao banco de dados MongoDB. Seu objetivo é realizar operações de CRUD (Create, Read, Update, Delete) para gerenciamento de usuários.


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
node criador-de-users.js
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

 * ?name=valor

 * ?email=exemplo@

 * ?age=valor



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


🎨 Front-end (Em Breve)
-----------------------

A interface visual será desenvolvida em breve utilizando:

⚛️ React.js (planejado)

Estilização com CSS moderno ou frameworks como TailwindCSS

📄 Licença
---------------------
Este projeto está sob a licença MIT.
