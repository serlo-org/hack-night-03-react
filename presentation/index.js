// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
import InteractiveX from "../assets/interactiveX";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

//
// const images = {
//   city: require("../assets/city.jpg"),
//   kat: require("../assets/kat.png"),
//   logo: require("../assets/logo.svg"),
//   markdown: require("../assets/markdown.png")
// };
//
// preloader(images);

const theme = createTheme({
  primary: '#007EC1',
  secondary: '#ffffff',
  success: '#5cb85c',
  danger: '#d9534f'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="#efefef">
            <Heading size={1} fit caps lineHeight={1} textColor="#404040">
              Serlo Hacknight
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="#404040">
              React
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={
`import { createElement } from 'react'
import { render } from 'react-dom'

const Greeting = () => (
  createElement('div', null, 'Hello World')
)

render(
  createElement('Greeting'),
  document.createElementById('app')
)`}
            ranges={[
              { loc: [3, 6] },
              { loc: [7, 11] },
              { loc: [0, 11], title: 'Hello World' }
            ]}/>

            <CodeSlide
              transition={[]}
              lang="js"
              code={
`const Greeting = ({ name }) => (
  createElement('div', null, \`Hello ${name}\`)
)

render(
  createElement(
    'Greeting',
    { name: 'Hacknight'}
  ),
  document.createElementById('app')
)`}
              ranges={[
                { loc: [0, 3] },
                { loc: [4, 11] },
                { loc: [0, 11], title: 'Hello Hacknight' }
              ]}/>

              <CodeSlide
                transition={[]}
                lang="js"
                code={
`import React from 'react'

const Greeting = ({ name }) => (
  <div>Hello {name}</div>
)

render(
  <Greeting name="Hacknight" />
  document.createElementById('app')
)`}
ranges={[
  { loc: [2, 5] },
  { loc: [6, 10] },
  { loc: [0, 10], title: 'Hello Hacknight' },
  { loc: [0, 1] }
]}/>

              <CodeSlide
                transition={[]}
                lang="js"
                code={
`import marked from 'marked'
import React, { Component } from 'react'

const Markdown = ({ src }) => {
  const html = marked(src)

  return (
    <div dangerouslySetInnerHTML={
      { __html: html }
    } />
  )
}

class MarkdownForm extends Component {
  constructor(props) {
    super(props)
    this.state = { src: '' }

    this.handleChange = (e) =>
      this.setState({ src: e.target.value })
    this.reset = () =>
      this.setState({ src: '' })
  }

  render() {
    const { src } = this.state

    return (
      <div>
        <textarea
          value={src}
          onChange={this.handleChange} />
        <br />
        <button
          onClick={this.reset}>Reset</button>
        <Markdown src={src} />
      </div>
    )
  }
}`}
                ranges={[
                  { loc: [3, 12] },
                  { loc: [13, 14] },
                  { loc: [25, 38] },
                  { loc: [24, 25] },
                  { loc: [14, 16] },
                  { loc: [16, 17] },
                  { loc: [18, 20] },
                  { loc: [20, 22] },
                  { loc: [14, 23] }
                ]}/>

          <Slide transition={[]} align="flex-start"  bgColor="#efefef" textColor="#404040">
            <Interactive />
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={
`import React, { Component } from 'react'

class ServerCall extends Component {
  constructor(props) {
    super(props)

    this.state = { message: null }
  }

  componentDidMount() {
    window.setTimeout(
      () => this.setState({
        message: 'fancy data fetched'
      }),
      3000
    )
  }

  render() {
    const { message } = this.state

    return message
      ? <div>{message}</div>
      : <Spinner />
  }
}`}
            ranges={[
              { loc: [2, 3] },
              { loc: [18, 25] },
              { loc: [9, 17] },
              { loc: [3, 8] }
            ]}/>
            <Slide transition={[]} align="flex-start"  bgColor="#efefef" textColor="#404040">
              <InteractiveX />
            </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

//
//           <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
//             <Appear fid="1">
//               <Heading size={1} caps fit textColor="primary">
//                 Full Width
//               </Heading>
//             </Appear>
//             <Appear fid="2">
//               <Heading size={1} caps fit textColor="tertiary">
//                 Adjustable Darkness
//               </Heading>
//             </Appear>
//             <Appear fid="3">
//               <Heading size={1} caps fit textColor="primary">
//                 Background Imagery
//               </Heading>
//             </Appear>
//           </Slide>
//           <Slide transition={["zoom", "fade"]} bgColor="primary">
//             <Heading caps fit>Flexible Layouts</Heading>
//             <Layout>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Left
//                 </Heading>
//               </Fill>
//               <Fill>
//                 <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
//                   Right
//                 </Heading>
//               </Fill>
//             </Layout>
//           </Slide>
//           <Slide transition={["slide"]} bgColor="black">
//             <BlockQuote>
//               <Quote>Wonderfully formatted quotes</Quote>
//               <Cite>Ken Wheeler</Cite>
//             </BlockQuote>
//           </Slide>
//           <Slide transition={["spin", "zoom"]} bgColor="tertiary">
//             <Heading caps fit size={1} textColor="primary">
//               Inline Markdown
//             </Heading>
//             <Markdown>
//               {`
// ![Markdown Logo](${images.markdown.replace("/", "")})
//
// You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
// * Lists too!
// * With ~~strikethrough~~ and _italic_
// * And lets not forget **bold**
//               `}
//             </Markdown>
//           </Slide>
//           <Slide transition={["slide", "spin"]} bgColor="primary">
//             <Heading caps fit size={1} textColor="tertiary">
//               Smooth
//             </Heading>
//             <Heading caps fit size={1} textColor="secondary">
//               Combinable Transitions
//             </Heading>
//           </Slide>
//           <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
//             <List>
//               <Appear><ListItem>Inline style based theme system</ListItem></Appear>
//               <Appear><ListItem>Autofit text</ListItem></Appear>
//               <Appear><ListItem>Flexbox layout system</ListItem></Appear>
//               <Appear><ListItem>React-Router navigation</ListItem></Appear>
//               <Appear><ListItem>PDF export</ListItem></Appear>
//               <Appear><ListItem>And...</ListItem></Appear>
//             </List>
//           </Slide>
//           <Slide transition={["slide"]} bgColor="primary">
//             <Heading size={1} caps fit textColor="tertiary">
//               Your presentations are interactive
//             </Heading>
//             <Interactive/>
//           </Slide>
//           <Slide transition={["spin", "slide"]} bgColor="tertiary">
//             <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
//               Made with love in Seattle by
//             </Heading>
//             <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
//           </Slide>
