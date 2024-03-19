import { Module } from '@nestjs/common';

import { oidcProviderModuleFactory } from './oidc-provider-module-factory';
import { OidcService } from './oidc.service';
import { OidcController } from './oidc.controller';

@Module({
  providers: [oidcProviderModuleFactory(), OidcService],
  controllers: [OidcController],
  exports: [OidcService],
})
export class OidcModule {}
