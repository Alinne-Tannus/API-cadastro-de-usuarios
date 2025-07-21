import express from 'express';
import pkg from '@prisma/client';
import cors from 'cors'


const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // endereço exato do front
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}))

app.use(express.json()); // Middleware para interpretar o corpo da requisição como JSON

const { PrismaClient } = pkg;
const prisma = new PrismaClient();



// rota pra criar um usuário
app.post('/users', async (req, res) => {
try{
    await prisma.user.create({
        data: {
            email: req.body.email, // Email do usuário enviado no corpo da requisição
            name: req.body.name, // Nome do usuário enviado no corpo da requisição
            age: Number(req.body.age) // Idade do usuário enviada no corpo da requisição
        },
    })

     res.status(201).send('Usuário criado com sucesso!'); // Resposta de sucesso
    } catch(error) {
    console.error(error); // Log do erro no console
     res.status(500).json({ error: "Erro ao criar usuário"});
    
    };
});


/* Padrão express 
rota para listar usuários */ 
app.get('/users', async (req, res) => {
    try{        
        const { email, name, age } = req.query;
         let users;
         console.log('Requisição recebida');

    if (req.query && Object.keys(req.query).length > 0) {
    users = await prisma.user.findMany({
        where: {
        ...(email && { email: { contains: email.toString(), mode: 'insensitive' } }),
        ...(name && { name: { contains: name.toString(), mode: 'insensitive' } }),
        ...(age && { age: Number(age) }),
        },
    });

    if (users.length === 0) {
        console.log('Nenhum usuário encontrado com os parâmetros fornecidos');
        users = await prisma.user.findMany(); // busca tudo se filtro não achar nada
    }
    } else {
    users = await prisma.user.findMany(); // busca tudo se não tiver filtro
    }

    return res.status(200).json(users);

        
        }
        catch(error) {
        console.error('Erro ao buscar usuários:', error); // Log do erro no console
        return res.status(500).json({ 
        error: "Erro ao buscar usuários", 
        message: error.message,
        stack: error.stack 
        });
        };

        console.log('Rota /users acessada com sucesso'); // Log para indicar que a rota foi acessada com sucesso
});

// Rota para atualizar um usuário
app.put('/users/:id', async (req, res) => {
try{
    await prisma.user.update({
       where:{
        id: req.params.id // ID do usuário enviado no corpo da requisição
       },
        data: {
            email: req.body.email, // Email do usuário enviado no corpo da requisição
            name: req.body.name, // Nome do usuário enviado no corpo da requisição
            age: Number(req.body.age) // Idade do usuário enviada no corpo da requisição
        },
    })

     res.status(201).send('Usuário atualizado com sucesso!'); // Resposta de sucesso
    } catch(error) {
    console.error(error); // Log do erro no console
     res.status(500).json({ error: "Erro ao atualizar usuário"});
    
    };
});

app.delete('/users/:id', async (req, res) => {
try{
    await prisma.user.delete({
        where: {
            id: req.params.id // ID do usuário a ser deletado
        },
    })

    res.status(200).send('Usuário deletado com sucesso!'); // Resposta de sucesso
}   catch(error) {
    console.error(error); // Log do erro no console
    res.status(500).json({ error: "Erro ao deletar usuário" });
    };
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

/*
    Criar API de usuários 

    *Criar um usuário
    *Listar usuários
    *Atualizar um usuário
    *Deletar um usuário
    *Criar uma rota para cada ação

*/


/*
app.post('/users'); // rota para criar um usuários
app.put('/users'); // rota para atualizar um usuário
app.delete('/users'); // rota para deletar um usuário


    É necessário que tenha um tipo de rota do método HTTP
    E precisamos de um endereço para colocar nossa rota
 */

