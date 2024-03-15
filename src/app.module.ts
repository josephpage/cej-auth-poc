import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OidcModule } from './oidc/oidc.module';
import { OidcController } from './oidc/oidc.controller';

@Module({
  imports: [OidcModule],
  controllers: [AppController, OidcController],
  providers: [AppService],
})
export class AppModule {}
