import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { NavCenter } from './components/Nav-center';
import { NavLeft } from './components/Nav-left';
import { NavRight } from './components/Nav-right';
import { Blog } from './pages/Blog';
import { Contat } from './pages/Contat';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Container } from './Style';
import { GlobalStyle } from "./style/style";
import dark from './style/theme/dark';
import light from './style/theme/light';


export function App(){
  const [Theme, setToggleTheme] = useState(true)
  
  function toggle(){setToggleTheme(!Theme)}
  return (
    <ThemeProvider theme={Theme ? dark : light}>

    <Container>
      <BrowserRouter>
       <GlobalStyle/>
       <NavLeft/>
       <NavCenter>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contat' element={<Contat/>}/>
         </Routes>
       </NavCenter>
       <NavRight theme={toggle}/>
      </BrowserRouter>
    </Container>

    </ThemeProvider>
  )
}
