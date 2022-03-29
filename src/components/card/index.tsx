import * as React from "react";
import { GatsbyImage, getImage,GatsbyImageProps } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
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
    title: number
    repository?: string
    projectUrl?: string
    intro: string
    projectTech: string
    link?: {
      url: string
      text: string
    }
    featureImage: GatsbyImageProps | any
    contentArea?: { 
      intro: string
    }
    id: string
  }
  showLink: boolean
}

const Card = (props:CardProps) => {
  const { 
    title,  
    repository, 
    projectUrl, 
    intro, 
    projectTech, 
    contentArea = undefined,
    featureImage = null, 
    link = undefined, 
    id = undefined,
    ...rest 
  } = props.node;
  const { showLink } = props;
  
  const tech = projectTech && JSON.parse(projectTech);
  const image = featureImage && getImage(featureImage);
  const CardIntro =  intro || contentArea[0]?.intro;

  console.log(showLink);

  return (
    <CardWrapper {...rest}>
      {image && <GatsbyImage image={image} alt="" />}
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
      {CardIntro && <p>{CardIntro}</p>}
      <footer>
        {tech &&
          tech.map((item, i) => (
            <TechItem key={`tech-${item}-${i}`}>{(i ? ',  ' : '') + item}</TechItem>
          ))}
        {showLink && <Link to={`/blog/${id}`} aria-label={`Read the full article - ${title}`}>Read article</Link>}
      </footer>
    </CardWrapper>
  )
};

export default Card;
