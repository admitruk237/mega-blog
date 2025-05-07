'use client';

import { ERRORS } from './errors';

type ErrorProps = {
  error: Error;
};

export default function HomePageError({ error }: ErrorProps) {
  if (error.message === ERRORS.NOT_FOUND) {
    return <>Articles not found</>;
  }
  return <>Someting went wrong</>;
}
