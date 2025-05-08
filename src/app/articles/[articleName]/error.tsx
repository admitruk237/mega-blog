'use client';

import AppLink from '../app-link';

export default function ArticleError() {
  return (
    <div className="text-center mt-30">
      <span>No articles for you my dear</span>
      <br />
      <AppLink href="/">Go home</AppLink>
    </div>
  );
}
