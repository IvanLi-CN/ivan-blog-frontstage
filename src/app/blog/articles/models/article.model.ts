export interface Article {
  title: string;
  id: number;
  slug: string;
  summary: string;
  htmlContent: string;
  publishedAt;
  Date;
  tags: Array<{
    id: number,
    name: string,
  }>;
}
