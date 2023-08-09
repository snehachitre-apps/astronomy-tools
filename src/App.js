import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Buttons from './components/Buttons';
import ApodForm from './components/ApodForm';
import Footer from './components/Footer';
import Image from './components/Image';
import React, { useState ,useEffect} from "react";
function App({visible}) {

  
  return (
    <div className="App">
      <Banner/>
      <Buttons/>
     
      <div>
    {visible && (
      <ApodForm />
      )
    }
    </div> 
      <Footer />
    </div>
  );
}

export default App;
