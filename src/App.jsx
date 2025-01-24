import React from "react";


import Hero from './components/landingPage/heroPage';
import Second from './components/landingPage/heroPageTwo';

import Third from './components/landingPage/heroPageThree';
import Four from './components/landingPage/heroPageFour';
import Five from './components/landingPage/heroPageFive';
import Six from './components/landingPage/heroPageSix';
import './components/css/hero.css';

const App = () => {




  return (
    <>



      <section style={{ backgroundColor: "#1C1913" }}>



        <Hero />
        <Second />
        <Third />
        <Four />
        <Five />
        <Six />


      </section>



    </>
  )
}
export default App;