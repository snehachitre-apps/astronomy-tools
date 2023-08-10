//displays the mars photos in Carousel format
import MarsForm from "./MarsForm";
import { useState } from "react";
import ImageGallery from "react-image-gallery";

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

let photoArray=[];
let photoObject={};
//     

export default function Gallery({data}){
        //   console.log(data.photos.length);
        // for (let idx=0;data.photos.length -1; idx++)
        // {
        //         // console.log(data.photos[idx]["img_src"]);
        //         photoObject={
        //                 "original": data.photos[idx]["img_src"],
        //                 "thumbnail":  data.photos[idx]["img_src"]
        //         }
        //         photoArray.push(photoObject);
        //         console.log(photoArray);
        // }
        
    return(

            <div className="container">
           <Carousel autoPlay={false}
      infiniteLoop={false}
      showArrows={true}
      showIndicators={false}
      showThumbs={true}
        interval={1000}
        
      >           
        {data.photos.map((photo,id) => {
                                // console.log(photo);
        
        return (
                
          <div className="carouselImageDisplay" key={photo.id}>  
				
                 <img  className="carouselImage" src={photo.img_src} alt={photo.earth_date} />
                 {/* <p className="legend">Earth Date: {photo.earth_date}</p> */}
        </div>
        
            );
                })}
		</Carousel>  
            </div>
           );
}