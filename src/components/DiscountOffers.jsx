import React from "react";
import DiscountData from '../Data/DiscountData.json'
import Carousels from "./Carousels";


function Places(){
  return(
    <Carousels carouseldata={DiscountData} id="discount_slider" heading="Discounts"/>
  )
}
export default Places;