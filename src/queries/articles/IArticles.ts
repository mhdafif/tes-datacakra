import { IResponse } from "../IResponse";

export interface IArticlesListData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  cover_image_url: string;
  createdAt: string; // or use Date if you plan to convert it
  updatedAt: string; // or use Date
  publishedAt: string; // or use Date
  locale: string | null;
}

export interface IArticlesListParams {
  pagination: {
    pageSize: number;
    page: number;
  };
  populate?: {
    user?: string;
    category?: string;
    comments?: {
      populate?: {
        user?: string;
      };
    };
  };
  filter?: {
    title?: {
      $eqi?: string;
    };
    category?: {
      name?: {
        $eqi?: string;
      };
    };
  };
}

export interface IArticlesPayload {
  id?: string;
  data: {
    title: string;
    description: string;
    cover_image_url: string;
    category?: number;
  };
}

export interface IQueryArticlesInfinite {
  // pageParams: IMerchantParams[];
  pageParams: any;
  pages: IResponse<IArticlesListData[]>[];
}
