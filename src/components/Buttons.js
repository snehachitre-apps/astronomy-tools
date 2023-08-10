
import ApodForm from "./ApodForm";
import MarsForm from "./MarsForm";
import "./styling.css";
import React, { useState } from "react";


const Buttons = ()  => {
const [visible, setVisible] = useState(false);
const [marsVisible, setMarsVisible] = useState(false);
 const handleAPODClick =(e) => {
  e.preventDefault();
  setVisible(true); 
  
 }
 const handleMarsClick =(e) => {
  e.preventDefault();
  setMarsVisible(true); 
  
 }
  return (
    <>
    <div className="flex-container">
      
      <button onClick={(event) => {
       handleAPODClick(event)
    }} >Astronomy Picture Of the Day</button>
       
      <button onClick={(event) => {
       handleMarsClick(event)
    }} >Mars Photos Gallery</button>
     
      </div>
      <div>
    {marsVisible && (
      <MarsForm />
      )
    }

    </div> 
    </>
      
  );
};

export default Buttons;