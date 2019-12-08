import * as React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a> &amp; DatoCMS.
    </footer>
  )
}

export default Footer
