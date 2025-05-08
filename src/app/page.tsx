import { getAllArticles } from './(server)/api';
import AppLink from './articles/app-link';
import { ArticlePreview } from './ArticlePreview';

const ARTICLES_PER_PAGE = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const page = Number.parseInt(
    typeof searchParams.page === 'string' ? searchParams.page : '1'
  );

  const allArticles = await getAllArticles();
  const articles = allArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  const nextPageUrl = {
    search: new URLSearchParams({
      page: (page + 1).toString(),
    }).toString(),
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Drag12 blog page {page}</h1>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li key={article.name}>
            <ArticlePreview name={article.name} text={article.header} />
          </li>
        ))}
      </ul>
      <AppLink href={nextPageUrl}>Next Page</AppLink>
    </>
  );
}
