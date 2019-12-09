import * as React from "react"
import { Inner } from "../../theme"
import { FooterWrapper } from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <Inner>
        <p>© Jamie Robertson - {new Date().getFullYear()}</p><p>Built with <a href="https://www.gatsbyjs.org" rel="noopener noreferrer" target="_blank">Gatsby</a>, <a href="https://www.netlify.com/" rel="noopener noreferrer" target="_blank">Netlify</a> &amp; <a href="https://www.datocms.com" rel="noopener noreferrer" target="_blank">DatoCMS</a>.</p>
      </Inner>
    </FooterWrapper>
  )
}

export default Footer
