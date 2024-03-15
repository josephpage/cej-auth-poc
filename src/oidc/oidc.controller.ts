import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import type { OidcService } from './oidc.service';

@Controller('oidc')
export class OidcController {
  constructor(private readonly OidcService: OidcService) {}

  @All('/*')
  public mountedOidc(@Req() req: Request, @Res() res: Response): Promise<void> {
    req.url = req.originalUrl.replace('/oidc', '');
    return this.OidcService.callback(req, res);
  }
}
