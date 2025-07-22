// gerarUsuarios.js

import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const criarUsuarioFake = async () => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const age = faker.number.int({ min: 14, max: 99 });
 
      return{name, email, age}
}

