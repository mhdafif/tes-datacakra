export interface IData {
  code: string;
  id: number;
}
export interface IDummy {
  loading: boolean;
  data?: IData[];
}

export type DummyStateType = "loading";

export interface IDummyStore extends IDummy {
  loadData(): Promise<any>;
  setState(type: DummyStateType, value: any): void;
  resetState(type: DummyStateType, value?: any): void;
}
