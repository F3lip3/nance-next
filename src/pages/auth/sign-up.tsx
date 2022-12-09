import { zodResolver } from '@hookform/resolvers/zod';
import { Envelope, Key, User } from 'phosphor-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { isTRPCClientError, trpc } from '../../common/trpc';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';
import { TextInput } from '../../components/TextInput';
import { useToast } from '../../hooks/useToast';
import { SignUpInput, signUpSchema } from '../../server/schemas/auth.schema';

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const { mutateAsync: signUp } = trpc.auth.signUp.useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit: SubmitHandler<SignUpInput> = async data => {
    try {
      setLoading(true);

      const user = await signUp(data, {
        onSuccess({ data, message, status }) {
          console.info(data);
          console.info(message);
          console.info(status);
        }
      });
      console.info(user);
    } catch (err) {
      if (isTRPCClientError(err)) {
        switch (err.message) {
          case 'INVALID_EMAIL_OR_PASSWORD':
            addToast({
              message: 'Falha na autenticação!',
              description: 'Email ou senha inválidos!',
              variant: 'error'
            });
            return;
          default:
            break;
        }
      }

      addToast({
        message: 'Falha na autenticação!',
        description:
          'Ocorreu um erro ao autenticar. Tente novamente mais tarde!',
        variant: 'error'
      });
      console.error('Generic error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center justify-center">
        <Logo />
        <Heading size="lg" className="-mt-8">
          Nance
        </Heading>
        <Text size="lg" className="text-gray-400">
          Cadastre-se agora!
        </Text>
      </header>

      <form
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name" className="flex flex-col gap-3">
          <Text className="font-semibold">Seu nome</Text>
          <TextInput.Root error={errors.name?.message}>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input
              id="name"
              type="text"
              placeholder="Informe seu nome"
              {...register('name')}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root error={errors.email?.message}>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              {...register('email')}
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root error={errors.password?.message}>
            <TextInput.Icon>
              <Key />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register('password')}
            />
          </TextInput.Root>
        </label>

        <Button
          type="submit"
          className="mt-4"
          disabled={isSubmitting || loading}
          loading={isSubmitting || loading}
        >
          Criar conta
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="xs" className="text-gray-400 hover:text-gray-200">
          <a href="#" className="underline">
            Já possui uma conta? Faça o login!
          </a>
        </Text>
      </footer>
    </div>
  );
}
