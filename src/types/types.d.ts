export interface CurrencyData {
  status: string;
  rates?: { [key: string]: { code: string; value: number } };
}

export interface ApiResponse {
  data: { [key: string]: { code: string; value: number } };
  meta: { last_updated_at: string };
}

export interface ResultData {
  sourceAmount: number;
  targetAmount: string;
  currency: string;
}
