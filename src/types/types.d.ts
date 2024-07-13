declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.jpeg" {
  const value: any;
  export = value;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}

export interface CurrencyData {
  status: string;
  rates?: { [key: string]: { code: string; value: number } };
}

export interface ResultData {
  sourceAmount: number;
  targetAmount: number;
  currency: string;
}
