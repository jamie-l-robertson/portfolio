import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import { Link } from "gatsby"
import { rem } from "polished"

const HeaderWrapper = styled.header`
  display: block;
  position: fixed;
  z-index: 10;
  top: 0;
  background: linear-gradient(
    to bottom,
    rgba(44, 66, 81, 1) 0%,
    rgba(44, 66, 81, 1) 50%,
    rgba(44, 66, 81, 0) 100%
  );
  width: 100%;
  padding: ${rem("25px")} 0 ${rem("50px")};

  ${breakpoint("tablet")`
    padding: ${rem("40px")} 0 ${rem("80px")};
  `};
`

const LogoWrapper = styled(Link)`
  display: inline-block;
  width: 60px;
  height: 35px;
  color: ${props => props.theme.color.quaternary};

  svg {
    display: block;
    height: 100%;
    width: auto;
  }
`

const NavList = styled.ul`
  display: none;

  ${breakpoint('tablet')`
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style: none;
    float: right;
    margin-top: 10px;
  `};
`;

const NavItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  font-weight: 700;
  font-size: ${rem('18px')};
  font-family: ${props => props.theme.font.label};

  + li {
    margin-left: ${rem('30px')};
  }

  > a {
    ${props => props.isActive && `
      color: ${props.theme.color.quaternary};
    `}
  }
`

export { HeaderWrapper, LogoWrapper, NavList, NavItem }
