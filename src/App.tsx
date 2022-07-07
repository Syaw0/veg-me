import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';

function App() {

  globalStyle()

  return (
    <Flex  id='wrapper' data-testid="app" >

    </Flex>
  );
}

export default App;
