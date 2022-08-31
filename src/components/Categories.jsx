import React from 'react'
import styled from 'styled-components'

import discover from "../images/discover.png"
import faculties from "../images/faculties.png"
import realestate from "../images/realestate.png"
import church from "../images/church.png"
import business from "../images/business.png"
import health from "../images/health.png"
import events from "../images/events.png"
import more from "../images/more.png"

function Categories() {
  return (
    <Component>
        <div>
            <span>
                <img src={discover} alt="discover" />
                <p>Discover</p>
            </span>

            <span>
                <img src={faculties} alt="faculties" />
                <p>Faculties</p>
            </span>

            <span>
                <img src={realestate} alt="realestate" />
                <p>Real Estate</p>
            </span>

            <span>
                <img src={church} alt="church" />
                <p>Church</p>
            </span>
        </div>

        <div>
            <span>
                <img src={business} alt="business" />
                <p>Business</p>
            </span>

            <span>
                <img src={health} alt="health" />
                <p>Health Care</p>
            </span>

            <span>
                <img src={events} alt="events" />
                <p>Events</p>
            </span>

            <span>
                <img src={more} alt="more" />
                <p>More</p>
            </span>
        </div>
    </Component>
  )
}

export default Categories

const Component = styled.div`
    div{
        display: flex;
        justify-content: space-between;
        margin: 35px 25px;
    }

    img{
        width: 60px;
        border: 2px solid yellow;
        border-radius: 50%;
        padding: 15px;
        font-size: 25px;
        margin-right: 10px;
    }
    
    p{
        font-size: 13px;
        margin-top: 10px;
    }
`