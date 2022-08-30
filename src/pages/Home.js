import React from 'react'
import Ad from '../components/Ad'
import Search from '../components/Search'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import Places from '../components/Places'
import Events from '../components/Events'
import Businesses from '../components/Businesses'

const index = () => {
    return (
        <div>
           <Search />
           <Ad text="Reserve online today, browse our wide assortment of rooms at different relaxation locations."/>
           <Carousel />
           <Ad text="Create an account and get access to the full function of your campus neighbour ad campaign."/>
           <Categories />
           <Places />
           <Businesses />
           <Events />
        </div>
    )
}

export default index
