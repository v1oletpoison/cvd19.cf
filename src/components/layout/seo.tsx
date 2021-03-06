import { graphql, useStaticQuery } from "gatsby";
import React, { MetaHTMLAttributes } from "react";
import Helmet from "react-helmet";

import { Props } from "@types";

export const SEO = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}: Props) => {
  const { site } = useStaticQuery<GatsbyTypes.SiteQuery>(
    graphql`
      query Site {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const metaDescription = description ?? site?.siteMetadata?.description ?? "";
  const metaItems: MetaHTMLAttributes<HTMLMetaElement>[] = [
    {
      name: "description",
      content: metaDescription,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:creator",
      content: site?.siteMetadata?.author ?? "",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      meta={metaItems.concat(meta)}
    />
  );
};
