import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { oidc } from './oidc.server';

const callback = oidc.callback();

@Controller('oidc')
export class OidcController {
  @All('/*')
  public mountedOidc(@Req() req: Request, @Res() res: Response): Promise<void> {
    req.url = req.originalUrl.replace('/oidc', '');
    return callback(req, res);
  }
}
