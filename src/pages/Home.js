import React from 'react'
import Header from "../components/Header"
import CategoriesLg from '../components/CategoriesLg'
import Footer from '../components/Footer'
import Events from '../components/Events'
import Places from '../components/Places'

const index = () => {
    return (
        <div>
            <Header />
            <CategoriesLg />
            <Events />
            <Places />
            <Footer />
        </div>
    )
}

export default index
