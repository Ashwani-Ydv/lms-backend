import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { QuestionService } from './question/question.service';
import * as faker from 'faker';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionService = app.get(QuestionService);

  for (let i = 0; i < 500; i++) {
    await questionService.create({
      text: faker.lorem.sentence(),
      options: [
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
      ],
      correctOption: faker.datatype.number({ min: 0, max: 3 }),
      difficulty: faker.datatype.number({ min: 1, max: 10 }),
    });
  }

  await app.close();
}

bootstrap();
