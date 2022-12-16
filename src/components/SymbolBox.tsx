import { QuoteEntity } from '../server/schemas/symbol.schema';
import { Text } from './Text';

interface SymbolBoxProps {
  quote: QuoteEntity;
}

export const SymbolBox = ({ quote }: SymbolBoxProps) => {
  return (
    <div className="bg-gray-800 rounded p-4">
      <Text size="md" className="text-white">
        {quote.longname}
      </Text>
    </div>
  );
};
