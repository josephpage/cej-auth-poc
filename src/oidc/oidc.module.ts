import { Module } from '@nestjs/common';

import { oidcProviderModuleFactory } from './oidc-provider-module-factory';
import { OidcService } from './oidc.service';

@Module({
  providers: [oidcProviderModuleFactory(), OidcService],
})
export class OidcModule {}
