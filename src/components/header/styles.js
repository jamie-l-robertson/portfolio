import styled from "styled-components"

const HeaderWrapper = styled.header`
  display: block;
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
`

const Burger = styled.button`
  display: block;
  width: 30px;
  height: 30px;
`

const BurgerBox = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: #000000;

  &::before,
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #000000;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(5px);
  }
`

export { HeaderWrapper, NavList, NavItem, Burger, BurgerBox }
