import { getArticleByName } from '@/app/(server)/api';

export default async function ArticlePage({ params }: Params) {
  const { articleName } = params;
  const article = await getArticleByName(articleName);

  return (
    <div>
      <h1 className="text-2xl font-bold">{article.header}</h1>
      {article.text.map((line, i) => {
        return <p key={i}>{line}</p>;
      })}
    </div>
  );
}
