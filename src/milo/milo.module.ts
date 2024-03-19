import { Module } from '@nestjs/common'

import { MiloService } from './milo.service'
import { MiloController } from './milo.controller'
import { FederationService } from '../federation/federation.service'

@Module({
  providers: [MiloService, FederationService],
  controllers: [MiloController]
})
export class OidcModule {}
