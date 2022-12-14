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
                <p>Directions</p>
            </span>

            <span>
                <img src={faculties} alt="faculties" />
                <p>Faculties</p>
            </span>

            <span>
                <img src={realestate} alt="realestate" />
                <p>Housing</p>
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

        @media (min-width: 768px) {
            margin: 35px 20px;
            justify-content: center;
        }
    }

    img{
        width: 60px;
        border: 2px solid #FEC70A;
        border-radius: 50%;
        padding: 15px;
        font-size: 25px;
        margin-right: 10px;

        @media (min-width: 768px) {
            width: 150px;
            border: 1px solid #FEC70A;
            border-radius: 15px;
            padding: 50px;
            margin: 30px;
        }
        @media (min-width:1200px){
            width: 200px;
        }

        
    }

    @media (min-width: 768px)   {
        img:hover {
            cursor: pointer;
            border: none;
            width: 155px;
            box-shadow: -3px -3px 7px #ffffffb2, 
            3px 3px 5px rgba(94, 104, 121, 0.945);
            transition:0.3s;
        }
    }
    @media (min-width: 1200px)   {
        img:hover {
            cursor: pointer;
            border: none;
            width: 205px;
            box-shadow: -3px -3px 7px #ffffffb2, 
            3px 3px 5px rgba(94, 104, 121, 0.945);
            transition:0.3s;
        }
    }
    p{
        font-size: 13px;
        margin-top: 10px;

        @media (min-width: 768px) {
            font-size: 18px;
        }
    }
`