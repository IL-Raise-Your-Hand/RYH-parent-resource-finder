import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"

const Footer = () => {
  const intl = useIntl()
  return (
    <footer className="footer">
      <div className="content">
        <div className="columns">
          <div className="column">
            <p>
              <Link to="/">{intl.formatMessage({ id: "home" })}</Link>
            </p>
            <p>
              <Link to="/about/">{intl.formatMessage({ id: "about" })}</Link>
            </p>
          </div>
          <div className="column">
            <p>
              <a
                href={intl.formatMessage({ id: "suggest-resource-url" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {intl.formatMessage({ id: "suggest-resource" })}
              </a>
            </p>
            <p>
              <a
                href={intl.formatMessage({ id: "feedback-url" })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {intl.formatMessage({ id: "feedback" })}
              </a>
            </p>
            <p>
              <a href="https://citybureau.org/" target="_blank">
                City Bureau
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
