// gerarUsuarios.js

import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createFakeUser = async () => {
  try {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    const randomAge = faker.number.int({ min: 18, max: 99 });

    await prisma.user.create({
      data: {
        email: randomEmail,
        name: randomName,
        age: randomAge
      },
    });

    console.log(`Usuário fictício criado: ${randomName}, ${randomEmail}, ${randomAge}`);
  } catch (error) {
    console.error('Erro ao criar usuário fictício:', error);
  } finally {
    await prisma.$disconnect();
  }
};

createFakeUser();
