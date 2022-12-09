import { signOut, useSession } from 'next-auth/react';
import { requireAuth } from '../common/auth';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';

export const getServerSideProps = requireAuth(async ctx => {
  return { props: {} };
});

export default function Home() {
  const { data } = useSession();

  return (
    <>
      <Heading size="lg">Dashboard</Heading>
      <div className="my-4 bg-gray-800 rounded-lg p-4">
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
      <div className="text-center">
        <Button onClick={() => signOut({ callbackUrl: '/auth/sign-in' })}>
          Sair
        </Button>
      </div>
    </>
  );
}
