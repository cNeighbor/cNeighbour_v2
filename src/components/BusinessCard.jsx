import React from 'react'
import styled from 'styled-components'

import review from "../images/review.png"

function BusinessCard({image, name, rating, category, duration}) {
  return (
    <Container>
      <img src={image} className="image" alt="" srcset="" />

      <div>
        <Title>
          <h3>{name}</h3>
          <span>
            <img src={review} width="15" alt="" srcset="" />
            <p>{rating}</p>
          </span>
        </Title>
        <p className="hotel">{category}</p>
        <hr />
        <Buttons>
          <div className="duration_div">
            <i className="fa fa-clock"></i>
            <p>{duration}</p>
          </div>
          <div className="cta_btns">
            <button>
              <i className="fa fa-phone"></i>
            </button>
            <button>Go</button>
          </div>
        </Buttons>
      </div>
    </Container>
  );
}
export default BusinessCard

const Container = styled.div`
    position: relative;
    display: grid;
    height: 145px;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    box-shadow: 0px 2px 2px #b8b9be, -2px -2px 2px #b8b9be;

    img {
        height: 80%;
        width: 100%;
        border-radius: 10px;
    }

    .hotel{
        font-size: 14px;
        color: gray;
    }

    hr{
        margin-top: 22px;
    }

    .footer{
        position: absolute;
        bottom: 15px;
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
                font-size: 12px;
                padding-left: 5px;
                margin-top: -1px;
            }
        }
    }

    @media (max-width: 320px) {
        padding: 5px;
        img {
            height: 70%;
            width: 100%;
            border-radius: 10px;
        }

        .footer{
            bottom: 2px;
            
            span{
                margin-top: 10px;
    
                p{
                    font-size: 12px;
                    padding-left: 5px;
                    margin-top: -1px;
                }
            }
        }
    }
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    h3{
        font-size: 14px;
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
  display: flex;
  justify-content: space-between;
  padding-top: 2.5%;
  padding-bottom:2.5%;

  .duration_div {
    display: flex;
    gap: 0.5rem;
    color: gray;
    i {
      margin-top: 4px;
    }
  }

  .cta_btns {
    flex-basis: 40%;
    display: flex;
    gap: 0.5rem;
  }

  button {
    background-color: black;
    color: white;
    border-radius: 30px;
    flex-basis: 50%;
    padding: 0.2rem 0.85rem;
    height: 30px;
  }
`;