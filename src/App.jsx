import { useRef, useState } from 'react';
import NavBar from './components/Navbar/navBar';
import Sidebar from './components/SideBar/sidebar';
import Home from './components/home/Home';
import About from './components/About/About';
import Projects from './components/project/project';
import Contact from './components/contact/contact';


function App() {
  
  return (
    <>
      <NavBar></NavBar>
      <Sidebar></Sidebar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
