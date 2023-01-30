import React, {Fragment} from "react"
import { PageBody } from "../../styles/profileNav"
import { Global, css } from "@emotion/react"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      
      <PageBody>{children}</PageBody>

    </Fragment>
  )
}

export default Layout
