import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const options = new DocumentBuilder()
    .setTitle('Users API')
    .setDescription('User management API')
    .setVersion('1.0')
    .build();

  const userApiDocument = SwaggerModule.createDocument(app, options, {
    include: [UsersModule],
  });

  SwaggerModule.setup('api', app, userApiDocument);

  await app.listen(3000);
}
bootstrap();
