export interface IDummyData {
  code: string;
  id: number;
}
export interface IDummy {
  loading: boolean;
  data?: IDummyData[];
}
export interface IDummyStore extends IDummy {
  loadData(): Promise<any>;
  reset(): void;
}
