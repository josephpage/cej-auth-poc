import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { OidcModule } from './oidc/oidc.module'
import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { configureLoggerModule } from './logger.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.environment',
      cache: true,
      load: [configuration]
    }),
    configureLoggerModule(),
    HttpModule.register({
      timeout: 5000
    }),
    OidcModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
