import React, { ReactNode } from 'react';

import { Maybe } from '@/types';

import { isBrowser } from '@/utils';

type Meta = JSX.IntrinsicElements[`meta`];

export interface Props {
  children?: ReactNode;
  title?: Maybe<string>;
  description?: Maybe<string>;
  lang?: string;
  meta?: Meta[];
  ogType?: `article` | `website`;
}

export function Seo(props: Props): JSX.Element {
  const { children, ogType, title, lang } = props;

  const metaTitle = title;

  const currentPage = isBrowser ? location.href : undefined;

  const metaLang = lang;

  const currentUrl = currentPage ? `` : ``;

  const renderCurrentPage = () => {
    return <link rel="canonical" href={currentUrl} />;
  };

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="lang" content={metaLang} />
      <meta name="og:url" content={currentUrl} />
      <meta name="og:type" content={ogType || `website`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="Hedda.health" />
      <meta name="twitter:title" content={title || ``} />
      <meta name="fb:app_id" content="1357918094709117" />
      {children}
      {renderCurrentPage()}
      <link rel="alternate" hrefLang="x-default" />
    </>
  );
}
