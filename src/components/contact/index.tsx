import * as React from "react"
import { Link } from "gatsby"
import config from "../../config"

const Contact = () => {
  return <a href={config.contact.email}>Get in touch</a>
}

export default Contact
