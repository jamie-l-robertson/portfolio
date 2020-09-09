import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { rem } from "polished";
import { motion } from "framer-motion";
import { Container } from "@theme";
import Heading from "@components/heading";

const HeroWrapper = styled(motion.custom(Container))`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: ${rem('200px')};

  ${breakpoint('tablet')`
    padding-top: calc(60px + 118px);
  `};

  ${breakpoint('desktop')`
    padding-top: calc(120px + 118px); 
  `};

  p > a {
    border-bottom: 1px dotted currentColor;
  }
`;

const HeroHeading = styled(Heading)`
  display: block;
  position: relative;
  font-size: ${rem('40px')};

  ${breakpoint('tablet')`
    font-size: ${rem('60px')};
  `};
  }
`;

const Prefix = styled.span`
  display: block;
  margin-bottom: ${rem('10px')};
  color: ${props => props.theme.config.color.quaternary};
  font-size: ${props => props.theme.config.font.prefix.sml};
  letter-spacing: initial;
`;

const Brand = styled.span`
  display: block;
`;

const Dot = styled.span`
  color: ${props => props.theme.config.color.quaternary};
`;

const Intro = styled(motion.div)`
  max-width: 760px;

  p {
    font-size: ${rem('20px')};

    ${breakpoint('desktop')`
      font-size: ${rem('22px')};
  `};
  }
`;

export { HeroWrapper, HeroHeading, Prefix, Brand, Intro, Dot };
