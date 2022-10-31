import React from 'react'
import styled from 'styled-components'

import review from "../images/review.png"

function Card({image, name, rating, category, duration}) {
  return (
    <Container>
        <img src={image} className="image" alt="" srcset="" />
        <Title>
            <h3>{name}</h3>
            <span>
                <img src={review} width="15" alt="" srcset="" />
                <p>{rating}</p>
            </span>
        </Title>
        <p className="hotel">{category}</p>
        <hr />
        <span className="footer">
            <span>
                <i className="fa fa-clock"></i>
                <p>{duration}</p>
            </span>

            <Buttons>
                <button><i className="fa fa-share-alt"></i></button>
                <button>Go</button>
            </Buttons>
        </span>
    </Container>
  )
}

export default Card

const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 8px !important;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    box-shadow: 0px 8px 6px #b8b9be, -3px -3px 6px #b8b9be;

    .image{
        width: 100%;
    }

    .hotel{
        font-size: 14px;
        color: gray;
    }

    .footer{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        text-align: center;

        span{
            display: flex;
            text-align: center;
            justify-content: center;
            color: gray;
            margin-top: 10px;

            p{
                font-size: 14px;
                padding-left: 5px;
                margin-top: -1px;
            }
        }
    }

`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    h3{
        font-size: 18px;
        font-weight: bold;
    }

    span{
        display: flex; 
        text-align: center;
        justify-content: center;

        img{
            padding-right: 10px;
            width: 25px;
            height: 18px;
        }
    }
`

const Buttons = styled.div`
    button{
        background: black;
        color: white;
        margin-left: 10px;
        padding: 5px 30px 5px 30px;
        border-radius: 20px;
    }
`