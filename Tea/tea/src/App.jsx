import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig.js'
import NavBar from './Components/NavBar.jsx'
import MyCard from './Components/MyCard'


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <MyCard title="Hello word"/>
    </ThemeProvider>
  );
}

export default App;
