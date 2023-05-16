import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Infolist from './pages/Infolist/Infolist';
import Login from './pages/login/login'
import Maindex from './pages/maindex/maindex'
export default class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path={"/index"} element={<Maindex/>} />
          <Route path={"/list"} element={<Infolist/>} />
        </Routes>
        </BrowserRouter>
      </div>
      
    )
  }
}
