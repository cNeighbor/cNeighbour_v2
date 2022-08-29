import React from 'react'
import styled from 'styled-components'

function Categories() {
  return (
    <Component>
        <div>
            <span>
                <i className="fa fa-map"></i>
                <p>Discover</p>
            </span>

            <span>
                <i className="fa fa-school"></i>
                <p>Faculties</p>
            </span>

            <span>
                <i className="fa fa-home"></i>
                <p>Real Estate</p>
            </span>

            <span>
                <i className="fa fa-church"></i>
                <p>Church</p>
            </span>
        </div>

        <div>
            <span>
                <i className="fa fa-briefcase"></i>
                <p>Business</p>
            </span>

            <span>
                <i className="fa fa-first-aid"></i>
                <p>Health Care</p>
            </span>

            <span>
                <i className="fa fa-calendar"></i>
                <p>Events</p>
            </span>

            <span>
                <i class="fa-solid fa-angles-right"></i>
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
        margin: 35px 50px 35px 50px;
    }

    .fa{
        border: 2px solid yellow;
        border-radius: 50%;
        padding: 20px;
        font-size: 25px;
    }

    .fa-solid{
        border: 2px solid yellow;
        border-radius: 50%;
        padding: 20px;
        font-size: 25px;
    }
    
`