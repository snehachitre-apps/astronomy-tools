import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Buttons from './components/Buttons';
import ApodForm from './components/ApodForm';
import Footer from './components/Footer';
import Image from './components/Image';
import React, { useState ,useEffect} from "react";
import MarsForm from './components/MarsForm';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App({visible}) {

  
  return (
    <div className="App">
      <Banner/>
      {/*buttons will conditionally render other forms */ }
      <Buttons/>
      <Footer />
    </div>
  );
}

export default App;
