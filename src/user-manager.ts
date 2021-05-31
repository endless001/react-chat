import { createUserManager } from 'redux-oidc';
import { UserManagerSettings } from 'oidc-client';

const userManagerConfig: UserManagerSettings = {
  client_id: 'chat',
  redirect_uri: 'http://localhost:3000/user/callback',
  response_type: 'token id_token',
  scope:"openid profile",
  authority: 'http://localhost:5000',
  silent_redirect_uri: 'http://localhost:5100/silentRenew.html',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true
};


const userManager = createUserManager(userManagerConfig);

export default userManager;
