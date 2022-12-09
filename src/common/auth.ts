import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { NextAuthOptions, unstable_getServerSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { crypto } from '../server/helpers/crypto';
import { signInSchema } from '../server/schemas/auth.schema';
import { prisma } from './prisma';

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'john@doe.com'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      authorize: async (credentials, request) => {
        const data = await signInSchema.parseAsync(credentials);
        console.info('AUTHORIZE DATA:', data);
        const user = await prisma.user.findUnique({
          where: { email: data.email }
        });

        console.info('USER', user);

        if (!user) return null;

        const isValidPassword = await crypto.compare(
          data.password,
          user.password
        );

        console.info('VALID?', isValidPassword);

        if (!isValidPassword) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name
        };
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      console.info('callback jwt:', token, user);
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }

      return token;
    },
    session: async ({ session, token }) => {
      console.info('callback session:', session, token);
      if (token) {
        session.user = {
          email: token.email,
          name: token.name,
          image: token.picture
        };
      }

      return session;
    }
  },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/auth/sign-in',
    newUser: '/auth/sign-up'
  }
};

export const requireAuth =
  (func: GetServerSideProps) => async (ctx: GetServerSidePropsContext) => {
    const session = await unstable_getServerSession(
      ctx.req,
      ctx.res,
      nextAuthOptions
    );

    console.info('SESSION', session);

    if (!session) {
      return {
        redirect: {
          destination: '/auth/sign-in',
          permanent: false
        }
      };
    }

    return await func(ctx);
  };
