import { Injectable, Inject } from '@nestjs/common';
import { Request, Response } from 'express';

import {
  OIDC_PROVIDER_MODULE,
  OidcProviderModule,
  Provider,
} from './oidc-provider-module-factory';

@Injectable()
export class OidcService {
  private readonly oidc: Provider;

  constructor(
    @Inject(OIDC_PROVIDER_MODULE) private readonly opm: OidcProviderModule,
  ) {
    this.oidc = new opm.Provider('http://localhost:3000', {
      // the rest of your configuration...
    });
  }

  public callback(req: Request, res: Response): any {
    return this.oidc.callback(req, res);
  }
}
