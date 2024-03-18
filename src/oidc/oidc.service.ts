import { Injectable, Inject, Req, Res } from '@nestjs/common';

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

      clients: [
        {
          client_id: 'foo',
          client_secret: 'bar',
          redirect_uris: ['http://localhost:3000/cb'],
          grant_types: ['authorization_code'], //  'implicit'
          response_types: ['code'], // 'code id_token'
        },
      ],
      clientDefaults: {
        grant_types: ['authorization_code'],
        id_token_signed_response_alg: 'RS256',
        response_types: ['code'],
        token_endpoint_auth_method: 'client_secret_basic',
      },
      pkce: {
        required: () => false,
      },
      cookies: {
        keys: ['my-secret-key'],
      },
      features: {
        devInteractions: { enabled: true }, // change this to false to disable the dev interactions
        userinfo: { enabled: true },
      },
      interactions: {
        url(_ /* ctx */, interaction) {
          return `/interaction/${interaction.uid}`;
        },
      },
    });
  }

  // Below are the methods that you can use to interact with the oidc-provider library

  callback: Provider['callback'] = () => {
    return this.oidc.callback();
  };

  interactionDetails: Provider['interactionDetails'] = (req, res) => {
    return this.oidc.interactionDetails(req, res);
  };

  interactionFinished: Provider['interactionFinished'] = (req, res, result) => {
    return this.oidc.interactionFinished(req, res, result);
  };

  interactionResult: Provider['interactionResult'] = (req, res, result) => {
    return this.oidc.interactionResult(req, res, result);
  };
}
