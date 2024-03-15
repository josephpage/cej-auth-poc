// eslint-disable-next-line @typescript-eslint/no-var-requires
import Provider from 'oidc-provider';
import type { Configuration as OidcProviderConfiguration } from 'oidc-provider';

const configuration: OidcProviderConfiguration = {
  async findAccount(/* ctx */ _, id) {
    return {
      accountId: id,
      async claims(use, scope) {
        return { sub: id, scope, use };
      },
    };
  },
};

const oidc = new Provider('http://localhost:3000', configuration);

export { oidc };
