export interface CurrencyData {
  status: string;
  rates?: { [key: string]: { code: string; value: number } };
}

export interface ResultData {
  sourceAmount: number;
  targetAmount: number;
  currency: string;
}
