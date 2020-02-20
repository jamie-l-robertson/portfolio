import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { rem } from "polished";
import { Link } from "gatsby";
import Heading from "@components/heading";

const CardWrapper = styled.article`
  margin-bottom: ${rem('25px')};
  padding: ${rem('40px')} ${rem('25px')};
  background-color: rgba(255, 255, 255, 0.08);
  transition: all 0.2s ease-in-out;

  ${breakpoint('tablet')`
    height: 100%;
    margin-bottom: 0;
  `};
`;

const CardMeta = styled.header`
  float: right;
  position: relative;
  z-index: 2;
  text-align: right;
`;

const StyledLink = styled.a`
  display: inline-block;
  margin: 0 ${rem("5px")};

  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${rem("20px")};
  padding-right: ${rem('90px')};
`;

const TechItem = styled.span`
  font-family: ${props => props.theme.font.label};
  font-weight: 700;
  font-size: ${rem("15px")};
  line-height: 1.5;
  color: ${props => props.theme.color.quaternary};
`;

export { CardWrapper, CardMeta, StyledLink, StyledHeading, TechItem };
