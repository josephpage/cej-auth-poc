import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OidcController } from './oidc.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, OidcController],
  providers: [AppService],
})
export class AppModule {}
