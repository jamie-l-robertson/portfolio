import * as React from "react"
import { Link } from "gatsby"
import Socialbar from "../socialbar"
import { HeroWrapper, Heading, Prefix, Brand, Dot } from "./styles"
import { Inner } from "../../theme"

interface HeroProps {
  showBrand?: boolean
  data: [
    {
      prefix: string
      title: string
      intro: string
      copyNode: {
        childMarkdownRemark: {
          html: string
        }
      }
      link: {
        url: string
        label: string
      }
    }
  ]
}

const Hero: React.FC<HeroProps> = ({ showBrand = true, data }) => {
  const { prefix, title, intro, copyNode, link } = data[0]

  return (
    <HeroWrapper>
      <Inner>
        {showBrand && <Brand />}
        {title && (
          <Heading>
            <Prefix>{prefix}</Prefix>
            {title}<Dot>.</Dot>
          </Heading>
        )}
        {intro && <p>{intro}</p>}
        {copyNode && (
          <div
            dangerouslySetInnerHTML={{
              __html: copyNode.childMarkdownRemark.html,
            }}
          />
        )}
        {link && <Link to={link.url}>{link.label}</Link>}
        <Socialbar />
      </Inner>
    </HeroWrapper>
  )
}

export default Hero
