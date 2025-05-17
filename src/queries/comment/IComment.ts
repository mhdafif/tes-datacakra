export interface ICommentListData {
  id: number;
  documentId: string;
  name: string;
  description: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
  locale: string | null;
}

export interface ICommentListParams {
  pagination?: {
    pageSize?: number;
    page?: number;
  };
  populate?: {
    user?: string;
    article?: string;
  };
  sort: string[]; // title:desc
}

export interface ICommentPayload {
  id?: string;
  data: {
    content: string;
    article?: number;
  };
}
