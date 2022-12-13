import React from 'react'
import styled from 'styled-components'
import Jumbotron from '../components/Jumbotron'

function Why() {
  return (
    <Container>
        <Content>
            <h1>Why choose us?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolorem officia nostrum laboriosam, animi dolor asperiores explicabo id voluptatibus vero molestias, iure quaerat quae iste doloribus tempore amet qui! Dolores.</p>

            <div className="sections">
                <div className="section1">
                    <div className="list">
                        <i class="fa-solid fa-check"></i>
                        <p className="text">11.4% APR</p>
                    </div>

                    <div className="list">
                        <i class="fa-solid fa-check"></i>
                        <p className="text">Locate places and businesses around you in a click</p>
                    </div>

                    <div className="list">
                        <i class="fa-solid fa-check"></i>
                        <p className="text">A platform to promote and grow you small businesses</p>
                    </div>
                </div>

                <div className="section2">
                    <div className="list">
                        <i class="fa-solid fa-check"></i>
                        <p className="text">A good tour guide to University freshers</p>
                    </div>

                    <div className="list">
                        <i class="fa-solid fa-check"></i>
                        <p className="text">Promote your Events and Occasions to a larger audience</p>
                    </div>

                    <div className="list">
                        <i class="fa-solid fa-check"></i>
                        <p className="text">Prices checked daily</p>
                    </div>
                </div>
            </div>
        </Content>

        <Jumbotron />
    </Container>
  )
}

export default Why

const Container = styled.div`
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

const Content = styled.div`
    margin: 15px;
    margin-top: 50px;
    text-align: left;

    h1{
        font-size: 25px;
        margin-bottom: 25px;

        @media (min-width: 760px) {
            font-size: 35px;
            font-weight: bold;
        }
    }

    .list {
        display: grid;
        grid-template-columns: 1fr 8fr;
        margin: 25px 7px;
    }

    .fa-solid {
        display: flex;
        color: white;
        background: #FFC70A;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        margin-right: 20px;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 768px) {
        .sections {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
`