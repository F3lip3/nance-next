export interface AuthConfigProps {
  jwt: {
    secret: string;
    expiresIn: string;
  };
}

export const AuthConfig: AuthConfigProps = {
  jwt: {
    secret: process.env.JWT_SECRET ?? 'undefined',
    expiresIn: '24h'
  }
};
