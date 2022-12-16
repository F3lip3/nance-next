import { debounce } from 'lodash';
import { MagnifyingGlass } from 'phosphor-react';
import React, { useEffect, useMemo, useState } from 'react';
import { requireAuth } from '../common/auth';
import { SymbolsList } from '../components/SymbolsList';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';

export const getServerSideProps = requireAuth(async ctx => {
  return { props: {} };
});

export default function Home() {
  const [ticker, setTicker] = useState('');

  const handleTickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicker(e.target.value);
  };

  const debounceTicker = useMemo(() => {
    return debounce(handleTickerChange, 700);
  }, []);

  useEffect(() => {
    return () => {
      debounceTicker.cancel();
    };
  });

  return (
    <div className="w-screen h-screen flex flex-col items-center py-16">
      <div className="w-3/5 flex flex-col items-center justify-center gap-2">
        <label htmlFor="ticker" className="flex flex-col gap-3 w-full">
          <Text size="xl" className="font-thin text-gray-400">
            Busque ações, fiis, stocks ou reits por nome ou código do ticker
          </Text>
          <TextInput.Root>
            <TextInput.Input
              id="ticker"
              type="text"
              size="lg"
              placeholder="Ex.: Apple, AAPL, ITUB4..."
              onChange={debounceTicker}
            />
            <TextInput.Icon size="lg">
              <MagnifyingGlass />
            </TextInput.Icon>
          </TextInput.Root>
        </label>
        {ticker?.length > 3 && <SymbolsList ticker={ticker} />}
      </div>
    </div>
  );
}
