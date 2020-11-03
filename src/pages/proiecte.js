import React from "react"
import Layout from "../components/layout"
import Proiecte from "../components/proiecte"
import LucrariButtons from "../components/Templates/LucrariButtons"

import SEO from "../components/seo"

const PageProiecte = () => {
  return (
    <Layout>
      <SEO title="Proiecte" />
      <LucrariButtons />
      <Proiecte />
    </Layout>
  )
}
export default PageProiecte
