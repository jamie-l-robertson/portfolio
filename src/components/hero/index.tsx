import * as React from "react"
import { Link } from "gatsby"
import { HeroWrapper, Heading, Prefix } from "./styles"
import { Inner } from "../../theme"

interface HeroProps {
  data: [
    {
      prefix: string
      title: string
      copy: string
      link: {
        url: string
        label: string
      }
    }
  ]
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { prefix, title, copy, link } = data[0]

  return (
    <HeroWrapper>
      <Inner>
        {title && (
          <Heading>
            <Prefix>{prefix}</Prefix>
            {title}
          </Heading>
        )}
        {copy && <p>{copy}</p>}
        {link && <Link to={link.url}>{link.label}</Link>}
      </Inner>
    </HeroWrapper>
  )
}

export default Hero
