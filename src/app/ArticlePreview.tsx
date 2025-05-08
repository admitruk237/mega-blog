'use client';

import { useEffect, useState } from 'react';
import { ROUTING } from './routing';
import AppLink from './articles/app-link';
import { articleStorage } from './ArticleLocalStorage';

type ArticlePreviewProps = {
  name: string;
  text: string;
};

export function ArticlePreview({ name, text }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(articleStorage.liked(name));

  /*   useEffect(() => {
    const likeKey = getLikeKey(name);
    const likeValue = localStorage.getItem(likeKey);
    setLiked(likeValue === 'like');
  }, [name]);
*/
  const like = () => {
    articleStorage.like(name);
    setLiked(true);
  };

  return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>;
      <button
        onClick={like}
        type="button"
        className="ml-2.5 cursor-pointer p-1.5 rounded bg-gray-500 border-amber-50 border
         hover:bg-blue-900 transition-colors duration-500"
      >
        {liked ? '👍' : 'Like'}
      </button>
    </>
  );
}
