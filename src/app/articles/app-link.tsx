import Link from 'next/link';
import { ReactNode } from 'react';
import { UrlObject } from 'url';
type AppLinkPropsType = {
  children: ReactNode;
  href: string | UrlObject;
};

export default function AppLink({ children, href }: AppLinkPropsType) {
  return (
    <Link
      className="text-white hover:text-cyan-500 transition-colors duration-300"
      href={href}
    >
      {children}
    </Link>
  );
}
