import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import { Link } from "gatsby"
import { rem } from 'polished';

const HeaderWrapper = styled.header`
  display: block;
  width: 100%;
  padding: ${rem('40px')} 0;

  ${breakpoint('tablet')`
    position: fixed;
    z-index: 10;
    top: 0;
    background: linear-gradient(to bottom, rgba(44,66,81,1) 0%,rgba(44,66,81,1) 40%,rgba(125,185,232,0) 100%);
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
`;

const NavList = styled.ul`
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
  float: right;
  margin-top: 10px;
`

const NavItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  font-family: ${props => props.theme.font.label};

  + li {
    margin-left: 20px;
  }
`

const Burger = styled.button`
  display: none;
  width: 30px;
  height: 30px;

  ${breakpoint("tablet")`
    display: none;
    visibility: hidden;
  `};
`

const BurgerBox = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: ${props => props.theme.color.quaternary};

  &::before,
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.color.quaternary};
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(5px);
  }
`

export { HeaderWrapper, LogoWrapper, NavList, NavItem, Burger, BurgerBox }
