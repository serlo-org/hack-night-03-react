import React from 'react'
import { browserHistory, IndexRoute, Route, Router } from 'react-router'

import App from 'src/common/components/App'
import Layout from 'src/common/components/Layout'
import Greeting from 'src/common/components/examples/Greeting'
import GreetingProps from 'src/common/components/examples/GreetingProps'
import GreetingPropsJSX from 'src/common/components/examples/GreetingPropsJSX'
import Markdown from 'src/common/components/examples/Markdown'
import MarkdownForm from 'src/common/components/examples/MarkdownLivePreview'
import Redux from 'src/common/components/examples/Redux'
import ServerCall from 'src/common/components/examples/ServerCall'

/* eslint-disable react/jsx-no-bind */
const Container = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="hello-world" component={() => <Greeting />} />
      <Route path="hello-world-props" component={() => <GreetingProps name="Hacknight" />} />
      <Route path="hello-world-props-jsx" component={() => <GreetingPropsJSX name="Hacknight" />} />
      <Route path="markdown" component={() => <Markdown src="This is some **[Markdown](https://daringfireball.net/projects/markdown/).**" />} />
      <Route path="markdown-live-preview" component={() => <MarkdownForm />} />
      <Route path="server-call" component={() => <ServerCall />} />
      <Route path="redux" component={() => <Redux />} />
      <IndexRoute component={App} />
    </Route>
  </Router>
)

export default Container
