interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'QkYKIsJTGPZnLYVBOw6bVLmE2ZyhDaDp',
  domain: 'ashwathb.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'https://ashwathb.auth0.com/api/v2/'
};
