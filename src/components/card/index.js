import React from "react"
import { CardWrapper } from "./styles"

const Card = props => {
  const { title, projectUrl } = props.node

  return (
    <CardWrapper>
      <h3>{title}</h3>
      <p>{projectUrl}</p>
    </CardWrapper>
  )
}

export default Card

Card.defaultProps = {
  title: "",
  projectUrl: "",
}
