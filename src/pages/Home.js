import React from 'react'
import Ad from '../components/Ad'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Places from '../components/Places'
import Events from '../components/Events'
import Businesses from '../components/Businesses'
import Why from '../components/Why'

const index = () => {
    return (
        <div>
           <Ad text="Reserve online today, browse our wide assortment of rooms at different relaxation locations."/>
           <Carousel />
           <Categories />
           <Businesses />
           <Why />
        </div>
    )
}

export default index
