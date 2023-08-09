import React, { useState ,useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styling.css";
import Image from "./Image";
// CSS Modules, react-datepicker-cssmodules.css// 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
// const NASA_APOD_URL = process.env.REACT_APP_API_ENDPOINT;
const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=`;


export default function ApodForm(){
    
    
 
    const [startDate, setStartDate] = useState(new Date()); 
    let date=startDate.toJSON().slice(0,10);
    
   
    const baseURL=`${NASA_APOD_URL}${NASA_API_KEY}&date=${date}&thumbs=true`;
    // console.log(baseURL);

    const [data, setData] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    

   
    

    const handleClick = async() => {
      if (startDate > new Date())
        alert("Input Date can not be from future!")
      else {
        try {
            const response = await fetch(baseURL);
      
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
      
            const result = await response.json();
           
            // console.log('result is: ', JSON.stringify(result, null, 4));
      
            setData(result);
          } catch (err) {
            setErr(err.message);
         
        };
      
        console.log(data);
      }
          
    }

    return (   
        <div >

            <h3>Please pick a date to display Astronomy Picture of the Day</h3>
           
            <DatePicker 
                selected={startDate } 
                dateFormat="yyyy-MM-dd"
                onChange={(date) => {
                    
                    setStartDate(date);
                    
                  }}
            />
               
              <button type="Submit" onClick={handleClick}> Get APOD</button>
                 {data ? <Image data={data} /> : null} 
                 
              </div>
   
   );
            

   
    

        
}
