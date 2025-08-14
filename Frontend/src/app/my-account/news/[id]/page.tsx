import NewsItem from "@/features/news/components/NewsItem";
import { getOneNews } from "@/admin/news/api/news";

export default async function OneNews({
  params,
}: {
  params: { id: string };
}) {
  const { id } =  params;
  const news = await getOneNews(id);
  return <NewsItem news={news} />;
}
