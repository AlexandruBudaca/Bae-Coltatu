import React from "react"
import Layout from "../components/layout"
import Concursuri from "../components/concursuri"
import LucrariButtons from "../components/Templates/LucrariButtons"

import SEO from "../components/seo"

const PageConcursuri = () => {
  return (
    <Layout>
      <SEO title="Concursuri" />
      <LucrariButtons />
      <Concursuri />
    </Layout>
  )
}
export default PageConcursuri
