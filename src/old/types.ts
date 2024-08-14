export interface DataResponse {
  addressRegex: string;
  addressTagRegex: null;
  code: string;
  confirmationsRequired: number;
  createdAt: Date;
  decimals: number;
  icon: string;
  id: string;
  isBaseAsset: boolean;
  isSellSupported: boolean;
  isStableCoin: boolean;
  isSupportedInUS: boolean;
  isSuspended: boolean;
  isSwapBaseSupported: boolean;
  isSwapQuoteSupported: boolean;
  maxAmount: null;
  maxBuyAmount: null;
  maxSellAmount: number;
  metadata: Metadata;
  minAmount: null;
  minBuyAmount: number;
  minSellAmount: number;
  name: string;
  notAllowedCountries: string[];
  notAllowedUSStates: string[];
  precision: number;
  supportsAddressTag: boolean;
  supportsLiveMode: boolean;
  supportsTestMode: boolean;
  testnetAddressRegex: string;
  type: string;
  updatedAt: Date;
}

export interface Metadata {
  chainId: string;
  coinType: null;
  contractAddress: string;
  networkCode: string;
}
