import React from 'react'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import CategoriesLg from '../components/CategoriesLg'
import Footer from '../components/Footer'
import Business from '../components/Business'
import Items from '../components/Items'

const index = () => {
    return (
        <div>
            <Header />
            <CategoriesLg />
            <Business />
            <Items />
            <Footer />
        </div>
    )
}

export default index
