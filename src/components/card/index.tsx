import * as React from "react"
import Icon from "../icon"
import {
  CardWrapper,
  CardMeta,
  StyledLink,
  StyledHeading,
  TechItem,
} from "./styles"

interface CardProps {
  node: {
    title: string
    repository?: string
    projectUrl?: string
    intro: string
    projectTech: Array<string>
  }
}

const Card: React.FC<CardProps> = props => {
  const { title, repository, projectUrl, intro, projectTech } = props.node

  return (
    <CardWrapper>
      <CardMeta>
        {repository && (
          <StyledLink to={repository}>
            <Icon name="Github" title={`View repository of ${title}`} />
          </StyledLink>
        )}
        {projectUrl && (
          <StyledLink to={projectUrl}>
            <Icon name="ExternalLink" title={`Visit ${projectUrl}`} />
          </StyledLink>
        )}
      </CardMeta>
      <StyledHeading level="3">{title}</StyledHeading>
      {intro && <p>{intro}</p>}
      <footer>
        {projectTech &&
          projectTech.map((item, i) => (
            <TechItem key={`tech-${item}-${i}`}>{(i ? ', ' : '') + item}</TechItem>
          ))}
      </footer>
    </CardWrapper>
  )
}

export default Card
