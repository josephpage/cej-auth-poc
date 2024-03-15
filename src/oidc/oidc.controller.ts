import { Controller, All, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { OidcService } from './oidc.service';

@Controller('oidc')
export class OidcController {
  private callback: (req: Request, res: Response) => Promise<void>;
  constructor(private readonly oidcService: OidcService) {
    this.callback = this.oidcService.callback();
  }

  @All('/*')
  public mountedOidc(@Req() req: Request, @Res() res: Response): Promise<void> {
    req.url = req.originalUrl.replace('/oidc', '');
    return this.callback(req, res);
  }
}
