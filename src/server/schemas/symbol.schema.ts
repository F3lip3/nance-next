import { z } from 'zod';

export const quoteSchema = z.object({
  exchange: z.string(), // 'NYQ'
  shortname: z.string(), // 'Itau Unibanco Banco Holding SA'
  quoteType: z.string(), // 'EQUITY'
  symbol: z.string(), // 'ITUB'
  index: z.string(), // 'quotes'
  score: z.number(), // 22375.0
  typeDisp: z.string(), // 'Equity'
  longname: z.string(), // 'Itaú Unibanco Holding S.A.'
  exchDisp: z.string(), // 'NYSE'
  sector: z.string(), // 'Financial Services'
  industry: z.string(), // 'Banks—Regional'
  dispSecIndFlag: z.boolean().optional(), // true
  isYahooFinance: z.boolean() // true
});

export const fetchSymbolsSchema = z.object({
  ticker: z.string().min(3)
});

export const fetchSymbolsOutputSchema = z.object({
  quotes: z.array(quoteSchema)
});

export type QuoteEntity = z.infer<typeof quoteSchema>;
export type FetchSymbolsInput = z.infer<typeof fetchSymbolsSchema>;
export type FetchSymbolsOutput = z.infer<typeof fetchSymbolsOutputSchema>;
