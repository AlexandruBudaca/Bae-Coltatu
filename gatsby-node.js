const path = require(`path`)
const projects = require(`./src/assets/projects.json`)
const concepte = require(`./src/assets/Concepte.json`)
const concursuri = require(`./src/assets/Concursuri.json`)

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

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const promisesProjects = projects.map(project =>
    createNode({
      id: createNodeId(`customNode-${project._id.$oid}`),
      parent: null,
      children: [],
      title: project.titlu,
      linkuri: project.linkuri,
      internal: {
        type: "CustomNodeProjects",
        contentDigest: createContentDigest(projects),
      },
    })
  )
  const promisesConcepte = concepte.map(project =>
    createNode({
      id: createNodeId(`customNode-${project._id.$oid}`),
      parent: null,
      children: [],
      title: project.titlu,
      linkuri: project.linkuri,
      internal: {
        type: "CustomNodeConcepte",
        contentDigest: createContentDigest(concepte),
      },
    })
  )
  const promisesConcursuri = concursuri.map(project =>
    createNode({
      id: createNodeId(`customNode-${project._id.$oid}`),
      parent: null,
      children: [],
      title: project.titlu,
      linkuri: project.linkuri,
      internal: {
        type: "CustomNodeConcursuri",
        contentDigest: createContentDigest(concursuri),
      },
    })
  )

  await Promise.all([promisesProjects, promisesConcepte, promisesConcursuri])
}
