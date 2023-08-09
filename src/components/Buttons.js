
import ApodForm from "./ApodForm";
import "./styling.css";
import React, { useState } from "react";


const Buttons = ()  => {
const [visible, setVisible] = useState(false);

 const handleAPODClick =(e) => {
  e.preventDefault();
  setVisible(true); 
  
 }
  return (
    <>
    <div className="flex-container">
      
      <button onClick={(event) => {
       handleAPODClick(event)
    }} >Astronomy Picture Of the Day [APOD]</button>
       
      <button >Mars Photos Gallery</button>
     
      </div>
      <div>
    {visible && (
      <ApodForm />
      )
    }
    </div> 
    </>
      
  );
};

export default Buttons;