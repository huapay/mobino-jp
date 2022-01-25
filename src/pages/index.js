import * as React from "react"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <main>
      <ul>
        {data.allMicrocmsArticles.edges.map(({ node }) => (
          <li key={node.articlesId}>
            <Link to={`/articles/${node.articlesId}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsArticles {
      edges {
        node {
          articlesId
          title
        }
      }
    }
  }
`
