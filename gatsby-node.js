const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const singleProiectTemplate = path.resolve(
    "src/components/Templates/SingleProiectTemplate.js"
  )

  return graphql(`
    {
      concepte: allMongodbColtatuConcepte {
        edges {
          node {
            id
          }
        }
      }
      concursuri: allMongodbColtatuConcursuri {
        edges {
          node {
            id
          }
        }
      }
      proiecte: allMongodbColtatuProiecte {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    // Create doc pages
    result.data.concepte.edges.forEach(({ node }) => {
      createPage({
        path: `/proiect${node.id}`,
        component: singleProiectTemplate,
        context: {
          id: node.id,
        },
      })
    })
    // Create blog pages
    result.data.concursuri.edges.forEach(({ node }) => {
      createPage({
        path: `/proiect${node.id}`,
        component: singleProiectTemplate,
        context: {
          id: node.id,
        },
      })
    })
    result.data.proiecte.edges.forEach(({ node }) => {
      createPage({
        path: `/proiect${node.id}`,
        component: singleProiectTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
}
