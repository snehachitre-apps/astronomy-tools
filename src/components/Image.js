import ApodForm from "./ApodForm";
import { useState } from "react";

export default function Image({data}){
   
    return(



            <div className="container">
              <figure >
                <img className="imageDisplay" src={data.hdurl} alt={data.title} />
                <figcaption>{data.title}</figcaption>
                </figure>
                <p>{data.explanation}</p>
            </div>
           );
}