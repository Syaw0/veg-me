import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import Nav from './components/Nav';
import Main from './components/main';
import darkTheme from './Styles/darkTheme';
import { theme } from './Styles/@stitches.config';
import { useStore } from './store/store';

function App() {
  const currentTheme = useStore(state=>state.currentTheme)
  globalStyle()

  return (
    <Flex className={currentTheme==="light"?theme:darkTheme}  id='wrapper' data-testid="app" css={{
      padding:"$3 $10",
      "@bp0":{
        padding:"$3 $8",
      },
      "@bp0-1":{
        padding:"$3 $2",
      },
      "@bp0-2":{
        padding:"$3 $12",
      },

      "@bp1":{
        padding:"$3 $4",
      },
      "@bp5":{
        padding:"$3 $2",
      }
    }}>
      <Nav/>

      <Main/>

    </Flex>
  );
}

export default App;
