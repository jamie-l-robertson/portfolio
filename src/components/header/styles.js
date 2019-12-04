import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const HeaderWrapper = styled.header`
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
`

const NavList = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
`

const NavItem = styled.li`
  display: inline-block;
  vertical-align: middle;
  font-family: ${props => props.theme.font.label};
`

const Burger = styled.button`
  display: block;
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

export { HeaderWrapper, NavList, NavItem, Burger, BurgerBox }
