import React from "react"
import { Link } from "gatsby"
import { CardWrapper, StyledIcon } from "./styles"

const Card = props => {
  const { title, repository, projectUrl, intro, projectTech } = props.node

  console.log(props.node)

  return (
    <CardWrapper>
      <StyledIcon name="Folder" />
      <Link to={repository}>
        <StyledIcon name="Github" />
      </Link>
      <Link to={projectUrl}>
        <StyledIcon name="ExternalLink" />
      </Link>
      <h3>{title}</h3>
      <p>{intro}</p>
      <footer>
        {projectTech && projectTech.map(item => <span>{item}</span>)}
      </footer>
    </CardWrapper>
  )
}

export default Card

Card.defaultProps = {
  title: "",
  projectUrl: "",
}
