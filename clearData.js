import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function clearData() {
  await prisma.user.deleteMany({}); // Apaga todos os usuários
  console.log('Todos os dados da coleção User foram removidos!');
}

clearData()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


  // Remover todos os dados da coleção User no MongoDB