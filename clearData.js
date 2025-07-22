import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function clearData() {
  try {
    prisma.user.deleteMany({}); // Apaga todos os usuários
    console.log('Todos os dados da coleção User foram removidos!');
  } catch (error) {
    console.error('Erro ao remover dados da coleção User:', error);
  }
}

// Remover todos os dados da coleção User no MongoDB