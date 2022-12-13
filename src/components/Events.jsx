import React from "react";
import EventsData from '../Data/EventData.json'
import Carousels from "./Carousels";


function Places(){
  return(
    <Carousels carouseldata={EventsData} id="events_slider" heading="Events"/>
  )
}
export default Places;