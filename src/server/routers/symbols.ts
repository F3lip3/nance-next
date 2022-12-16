import {
  fetchSymbolsOutputSchema,
  fetchSymbolsSchema
} from '../schemas/symbol.schema';
import { procedure, router } from '../trpc';

export const symbolsRouter = router({
  fetch: procedure
    .input(fetchSymbolsSchema)
    .output(fetchSymbolsOutputSchema)
    .query(async ({ input, ctx }) => {
      return {
        quotes: [
          {
            exchange: 'NYQ',
            shortname: 'Itau Unibanco Banco Holding SA',
            quoteType: 'EQUITY',
            symbol: 'ITUB',
            index: 'quotes',
            score: 22375.0,
            typeDisp: 'Equity',
            longname: 'Itaú Unibanco Holding S.A.',
            exchDisp: 'NYSE',
            sector: 'Financial Services',
            industry: 'Banks—Regional',
            dispSecIndFlag: true,
            isYahooFinance: true
          },
          {
            exchange: 'SAO',
            shortname: 'ITAUSA      PN  EJ  N1',
            quoteType: 'EQUITY',
            symbol: 'ITSA4.SA',
            index: 'quotes',
            score: 20426.0,
            typeDisp: 'Equity',
            longname: 'Itaúsa S.A.',
            exchDisp: 'São Paulo',
            sector: 'Financial Services',
            industry: 'Banks—Regional',
            isYahooFinance: true
          },
          {
            exchange: 'SAO',
            shortname: 'ITAUUNIBANCOPN  EJ  N1',
            quoteType: 'EQUITY',
            symbol: 'ITUB4.SA',
            index: 'quotes',
            score: 20207.0,
            typeDisp: 'Equity',
            longname: 'Itaú Unibanco Holding S.A.',
            exchDisp: 'São Paulo',
            sector: 'Financial Services',
            industry: 'Banks—Regional',
            isYahooFinance: true
          },
          {
            exchange: 'NYQ',
            shortname: 'Itau CorpBanca',
            quoteType: 'EQUITY',
            symbol: 'ITCB',
            index: 'quotes',
            score: 20114.0,
            typeDisp: 'Equity',
            longname: 'Itaú Corpbanca',
            exchDisp: 'NYSE',
            sector: 'Financial Services',
            industry: 'Banks—Regional',
            isYahooFinance: true
          },
          {
            exchange: 'SAO',
            shortname: 'ITAUUNIBANCOON  EJ  N1',
            quoteType: 'EQUITY',
            symbol: 'ITUB3.SA',
            index: 'quotes',
            score: 20030.0,
            typeDisp: 'Equity',
            longname: 'Itaú Unibanco Holding S.A.',
            exchDisp: 'São Paulo',
            sector: 'Financial Services',
            industry: 'Banks—Regional',
            isYahooFinance: true
          },
          {
            exchange: 'SAO',
            shortname: 'ITAUSA      ON  EJ  N1',
            quoteType: 'EQUITY',
            symbol: 'ITSA3.SA',
            index: 'quotes',
            score: 20029.0,
            typeDisp: 'Equity',
            longname: 'Itaúsa S.A.',
            exchDisp: 'São Paulo',
            sector: 'Financial Services',
            industry: 'Banks—Regional',
            isYahooFinance: true
          },
          {
            exchange: 'SGO',
            shortname: 'ITAU CORPBANCA',
            quoteType: 'EQUITY',
            symbol: 'ITAUCORP.SN',
            index: 'quotes',
            score: 20012.0,
            typeDisp: 'Equity',
            longname: 'Itaú Corpbanca',
            exchDisp: 'Santiago Stock Exchange',
            sector: 'Financial Services',
            industry: 'Banks—Regional',
            isYahooFinance: true
          }
        ]
      };
    })
});
