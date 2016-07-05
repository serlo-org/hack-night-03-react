import marked from 'marked'
import React, { PropTypes } from 'react'

const Markdown = ({ src }) => {
  const html = marked(src)

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}

Markdown.propTypes = {
  src: PropTypes.string.isRequired
}

export default Markdown
