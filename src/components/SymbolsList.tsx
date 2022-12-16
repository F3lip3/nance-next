import NextError from 'next/error';
import { trpc } from '../common/trpc';
import { Loading } from './Loading';
import { SymbolBox } from './SymbolBox';
import { Text } from './Text';

export interface SymbolsListProps {
  ticker: string;
}

export const SymbolsList = ({ ticker }: SymbolsListProps) => {
  const symbolsQuery = trpc.symbols.fetch.useQuery({ ticker });

  if (symbolsQuery.error) {
    return (
      <NextError
        title={symbolsQuery.error.message}
        statusCode={symbolsQuery.error?.data?.httpStatus ?? 500}
      />
    );
  }

  if (symbolsQuery.isLoading)
    return (
      <div className="flex items-center justify-center bg-gray-800 w-full rounded min-h-[128px]">
        <Loading size="md" />
      </div>
    );

  if (!symbolsQuery.data.quotes.length)
    return (
      <div className="flex items-center justify-center bg-gray-800 w-full rounded min-h-[128px]">
        <Text size="lg" className="font-semibold text-gray-200">
          Nenhuma ação, fii, stock ou reit encontrado...
        </Text>
      </div>
    );

  return (
    <div className="w-full grid grid-cols-4 gap-2">
      {symbolsQuery.data.quotes.map(quote => (
        <SymbolBox key={quote.symbol} quote={quote} />
      ))}
    </div>
  );
};
