export default function ArticlePage(props: Params) {
  const { params } = props;
  const { articleName } = params;
  return <div>This is acticle: {articleName}</div>;
}
