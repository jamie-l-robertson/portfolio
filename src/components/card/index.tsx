import * as React from "react";
import Icon from "@components/icon";
import {
  CardWrapper,
  CardMeta,
  StyledLink,
  StyledHeading,
  TechItem,
} from "./styles";

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
  const { title, repository, projectUrl, intro, projectTech, ...rest } = props.node;

  return (
    <CardWrapper {...rest}>
      <CardMeta>
        {repository && (
          <StyledLink href={repository} rel="noopener noreferrer" target="_blank" aria-label="View project code">
            <Icon name="Github" title={`View repository of ${title}`} />
          </StyledLink>
        )}
        {projectUrl && (
          <StyledLink href={projectUrl} rel="noopener noreferrer" target="_blank" aria-label="View project">
            <Icon name="ExternalLink" title={`Visit ${projectUrl}`} />
          </StyledLink>
        )}
      </CardMeta>
      <StyledHeading level="3">{title}</StyledHeading>
      {intro && <p>{intro}</p>}
      <footer>
        {projectTech &&
          projectTech.map((item, i) => (
            <TechItem key={`tech-${item}-${i}`}>{(i ? ',  ' : '') + item}</TechItem>
          ))}
      </footer>
    </CardWrapper>
  )
};

export default Card;
