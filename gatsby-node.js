const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const SingleProiectTemplate = path.resolve(
    "src/components/Templates/SingleProiectTemplate.js"
  )
  const SingleConcursTemplate = path.resolve(
    "src/components/Templates/SingleConcursTemplate.js"
  )

  const SingleConceptTemplate = path.resolve(
    "src/components/Templates/SingleConceptTemplate.js"
  )
  return await graphql(`
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

    result.data.concepte.edges.forEach(({ node }) => {
      createPage({
        path: `/proiect${node.id}`,
        component: SingleConceptTemplate,
        context: {
          id: node.id,
        },
      })
    })

    result.data.concursuri.edges.forEach(({ node }) => {
      createPage({
        path: `/proiect${node.id}`,
        component: SingleConcursTemplate,
        context: {
          id: node.id,
        },
      })
    })
    result.data.proiecte.edges.forEach(({ node }) => {
      createPage({
        path: `/proiect${node.id}`,
        component: SingleProiectTemplate,
        context: {
          id: node.id,
        },
      })
    })
  })
}
