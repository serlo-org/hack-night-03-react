import React from 'react'
import { browserHistory, Router, Route } from 'react-router'

import Greeting from 'src/common/components/examples/Greeting'
import GreetingProps from 'src/common/components/examples/GreetingProps'
import GreetingPropsJSX from 'src/common/components/examples/GreetingPropsJSX'
import Markdown from 'src/common/components/examples/Markdown'
import MarkdownForm from 'src/common/components/examples/markdownLivePreview'

/* eslint-disable react/jsx-no-bind */
const Container = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="hello-world" component={() => <Greeting />} />
      <Route path="hello-world-props" component={() => <GreetingProps name="Hacknight" />} />
      <Route path="hello-world-props-jsx" component={() => <GreetingPropsJSX name="Hacknight" />} />
      <Route path="markdown" component={() => <Markdown src="This is some **[Markdown](https://daringfireball.net/projects/markdown/).**" />} />
      <Route path="markdown-live-preview" component={() => <MarkdownForm />} />
    </Route>
  </Router>
)

export default Container
