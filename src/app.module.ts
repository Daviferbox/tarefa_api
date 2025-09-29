import { Module } from '@nestjs/common';
import { usuarioModule } from './usuario/usuario.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [usuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
