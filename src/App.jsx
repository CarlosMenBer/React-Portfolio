import React from 'react';
import "./App.css";
import Header1 from './components/header/Header1';
import Home1 from './components/home/Home1';
import About1 from './components/about/About1';
import Skills1 from './components/skills/Skills1';
import Contact1 from './components/contact/Contact1';
import Footer1 from './components/Footer/Footer1';
import Api1 from './components/Api/Api1';


const App = () => {
  return (
    <>
      <Header1 />
      <main className='main'>
        <Home1 />
        <About1 />
        <Skills1 />
        <Api1/>
        <Contact1 />
        <Footer1 />
      </main>
    </>
  );
}

export default App;
