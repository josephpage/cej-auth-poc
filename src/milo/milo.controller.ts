import { Controller } from '@nestjs/common'
import { MiloService } from './milo.service'

@Controller('milo')
export class MiloController {
  constructor(private readonly oidcService: MiloService) {}
}
