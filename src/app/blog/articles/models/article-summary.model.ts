export interface ArticleSummary {
  title: string;
  id: number;
  slug: string;
  summary: string;
  publishedAt;
  Date;
  tags: Array<{
    id: number,
    name: string,
  }>;
}
