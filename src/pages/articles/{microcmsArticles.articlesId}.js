import React from "react"
import { graphql } from "gatsby"

const ArticlePage = ({ data }) => {
  const article = data.microcmsArticles

  return (
    <main>
      <span>{article.writer.name}</span>
      <h1>{article.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${article.body}`,
        }}
      />
    </main>
  )
}

export default ArticlePage

export const query = graphql`
  query($id: String!) {
    microcmsArticles(id: { eq: $id }) {
      articlesId
      title
      body
      writer {
        name
      }
    }
  }
`
