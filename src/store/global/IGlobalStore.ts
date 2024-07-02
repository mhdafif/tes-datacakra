export interface IData {
  loading: boolean;
  setupInterceptor: boolean;
}

export interface IGlobalStore extends IData {
  setLoading(value: boolean): void;
  setSetupInterceptor(): void;
}
