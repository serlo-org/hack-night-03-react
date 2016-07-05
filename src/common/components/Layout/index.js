import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'

const Layout = ({ children }) => (
  <div>
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <IndexLink to="/" className="navbar-brand">React Hacknight</IndexLink>
        </div>
        <div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/hello-world">1</Link>
            </li>
            <li>
              <Link to="/hello-world-props">2</Link>
            </li>
            <li>
              <Link to="/hello-world-props-jsx">3</Link>
            </li>
            <li>
              <Link to="/markdown">4</Link>
            </li>
            <li>
              <Link to="/markdown-live-preview">5</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container" style={{ padding: '75px 15px', textAlign: 'center' }}>
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
