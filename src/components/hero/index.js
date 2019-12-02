import React from "react"
import { Link } from "gatsby"
import { arrayOf, shape, string } from "prop-types"
import { HeroWrapper, Heading, Prefix } from "./styles"
import { Inner } from "../../theme"

const Hero = ({ data }) => {
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

Hero.propTypes = {
  data: arrayOf(
    shape({
      prefix: string,
      title: string,
      copy: string,
      link: shape({
        url: string,
        label: string,
      }),
    })
  ),
}

Hero.defaultProps = {
  data: [
    {
      prefix: "",
      title: "Title goes here...",
      copy: "Copy goes here...",
      link: {},
    },
  ],
}
