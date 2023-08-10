import Select from "react-select";
import React, {useState} from "react";
import Gallery from "./Gallery";

const NASA_MARS_PHOTOS_URL = "https://api.nasa.gov/mars-photos/api/v1/";

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;


export default function MarsForm(){
    var sol=1000;
    const [choice, setUserChoice] = useState("");
    
    // console.log(baseURL);
   
    const [data, setData] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const Rovers = [
        // { label: "__Select Rover", value: "" },
        { label: "Spirit", value: "Spirit" },
        { label: "Opportunity", value: "Opportunity" },
        { label: "Curiosity", value: "Curiosity" }
      ];
    
    const handleChange =(e) => {
        setUserChoice(e.value);
        console.log(e.value);
    }
      
    const handleSubmit = async() =>{
        
        if (choice==="Spirit" || choice==="Opportunity")
                {sol=2;}
        const baseURL=`${NASA_MARS_PHOTOS_URL}rovers/${choice}/photos?sol=${sol}&api_key=${NASA_API_KEY}`;
        console.log(baseURL);
        
        try {
            const response = await fetch(baseURL);
      
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
      
            const result = await response.json();
           
            console.log('result is: ',result);
      
            setData(result);
          } catch (err) {
            setErr(err.message);
            
            console.log(data);

          }
    }



    return(
      <>
        <div className="select-rover">
            <h3>Select a Mars Rover to see the photos.</h3>
            <Select   options={Rovers}
             value={Rovers.find(obj => obj.value === choice)}
             placeholder="Select a Rover" 
            onChange={handleChange}
             />
            <button type="Submit" onClick={handleSubmit}>Get Photos</button>
                    
        </div>
        {data ? <Gallery data={data} /> : null} 
        </>
    );


}