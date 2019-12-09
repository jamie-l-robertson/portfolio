import * as React from "react"
import { Inner } from "../../theme"
import { FooterWrapper } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <Inner>
        <p>© Jamie Robertson - {new Date().getFullYear()}</p><p>Built with <a href="https://www.gatsbyjs.org">Gatsby</a>, <a href="https://www.netlify.com/">Netlify</a> &amp; <a href="https://www.datocms.com">DatoCMS</a>.</p>
      </Inner>
    </FooterWrapper>
  )
}

export default Footer
