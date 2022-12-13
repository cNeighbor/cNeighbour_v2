import React from "react";
import PlaceData from '../Data/PlaceData.json';
import Carousels from "./Carousels";


function Places(){
  return(
    <Carousels carouseldata={PlaceData} id="place_slider" heading="Fun places"/>
  )
}
export default Places;