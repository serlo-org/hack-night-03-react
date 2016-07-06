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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

//
// const images = {
//   city: require("../assets/city.jpg"),
//   kat: require("../assets/kat.png"),
//   logo: require("../assets/formidable-logo.svg"),
//   markdown: require("../assets/markdown.png")
// };
//
// preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              What is Redux and why?
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={'(previousState, action) => newState'}
            ranges={[
              { loc: [0, 1] },
            ]}/>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Say again...?
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Let's look at some bad practices first in ...
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                jQuery
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/jquery")}
            ranges={[
              { loc: [0, 7] },
              { loc: [7, 10] },
              { loc: [11, 16] }
            ]}/>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>DOM is not a good place to store state</ListItem></Appear>
              <Appear><ListItem>There is no consistent view of the state</ListItem></Appear>
              <Appear><ListItem>We don't really know what caused the current state</ListItem></Appear>
              <Appear><ListItem>What happens in a large application with WebSockets, AJAX ...?</ListItem></Appear>
              <Appear><ListItem>In a team, how do you keep track of everything and train people?</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Let's look at some bad practices first in ...
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Angular
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/angular")}
            ranges={[
              { loc: [0, 7] },
              { loc: [11, 15] }
            ]}/>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>State is kept inside of a controller</ListItem></Appear>
              <Appear><ListItem>In real life 10% is local scope, 90% is shared state</ListItem></Appear>
              <Appear><ListItem>Bad: Global state using the rootScope</ListItem></Appear>
              <Appear><ListItem>Bad: Global state using eventbus with side effects</ListItem></Appear>
              <Appear><ListItem>Bad: Global state using global, services, you name it</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom"]} bgColor="black">
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                The rescue
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                REDUX
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/redux-1")}
            ranges={[
              { loc: [0, 7], note: 'A company has a global knowledge management, called the store' },
              { loc: [9, 13], note: 'CEO decides new directive: everyone must wear appropriate clothes' },
              { loc: [14, 15], note: 'CEO makes directive public' },
              { loc: [16, 28], note: 'Departments decide what to do' },
              { loc: [29, 37], note: 'CEO can always see what\'s happening' },
              { loc: [38, 39], note: 'CEO resigns.' },
            ]}/>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              In real life...
            </Heading>
          </Slide>


          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/redux-3")}
            ranges={[
              { loc: [0, 2] },
              { loc: [2, 15], note: 'a list of all reducers' },
              { loc: [4, 9], note: 'greeting reducer' },
              { loc: [10, 15], note: 'some other reducer' },
              { loc: [17, 21], note: 'state => react element props' },
              { loc: [22, 27] }
            ]}/>

          <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw!../assets/redux-2")}
            ranges={[
              { loc: [0, 2] },
              { loc: [3, 8] },
              { loc: [9, 13], note: 'this is an action creator' },
              { loc: [14, 15], note: 'return the greeting state' },
              { loc: [16, 19], note: 'state => react element props' },
              { loc: [20, 23], note: 'action dispatchers => react element props' },
              { loc: [24, 25], note: 'link mappers and react element' }
            ]}/>

          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Get the skeleton!
            </Heading>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="tertiary">
                github.com/serlo-org
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                hack-night-03-react
              </Heading>
            </Appear>
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