import React from "react"
import Layout from "../components/layout"
import Concepte from "../components/concepte"
import LucrariButtons from "../components/Templates/LucrariButtons"

import SEO from "../components/seo"

const Lucrari = () => {
  return (
    <Layout>
      <SEO title="Lucrari" />
      <LucrariButtons />
      <Concepte />
    </Layout>
  )
}
export default Lucrari
