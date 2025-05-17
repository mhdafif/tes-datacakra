import { IArticlesListParams } from "@/queries/articles/IArticles";

export interface IArticleState {
  params: IArticlesListParams;
}
export interface IArticleStore extends IArticleState {
  setState(type: keyof IArticleState, value: any): void;
  resetState(type: keyof IArticleState, value?: any): void;
}
