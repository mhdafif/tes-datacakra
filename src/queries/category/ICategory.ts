export interface ICategoryListData {
  id: number;
  documentId: string;
  name: string;
  description: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  publishedAt: string; // ISO date string
  locale: string | null;
}

export interface ICategoryPayload {
  id?: string;
  data: {
    name: string;
  };
}
