import React from 'react'
import styled from 'styled-components'

import review from "../images/review.png"

function Card({image, name, rating, category, duration}) {
  return (
    <Container>
      <Image>
        <img src={image} alt={` Typical day at ${name}`} />
      </Image>
      <Title>
        <h3>
          {" "}
          <span>{name}</span>{" "}
          <span className="rateingSpan">
            <img src={review} alt={rating} />
            {rating}
          </span>{" "}
        </h3>
        <p>{category}</p>
      </Title>
      <Buttons>
        <div className="duration_div">
          <i className="fa fa-clock" />
          <p>{duration}</p>
        </div>
        <div className="cta_btn">
          <button>
            <i className="fa fa-share-alt" />
          </button>
          <button>Go</button>
        </div>
      </Buttons>
    </Container>
  )
}

export default Card

const Container = styled.figure`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-top: 1px solid rgba(27, 31, 35, 0.15);
  border-bottom: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 4px;
  padding: 0.5rem;
  gap: 1rem;
`;
const Image = styled.div`
  img {
    inline-size: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 4px;
  }
`;
const Title = styled.figcaption`
  display: flex;
  flex-direction: column;
  h3 {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
  img {
    display: inline;
    margin-bottom: 4px;
  }
  .ratingSpan {
    display: block;
    flex-basis: 20%;
  }
  p {
    text-align: left;
    border-bottom: 1px solid grey;
    color: gray;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  .duration_div {
    display: flex;
    gap: 0.5rem;
    color: gray;
    i {
      margin-top: 4px;
    }
  }
  .cta_btn {
    flex-basis: 40%;
    display: flex;
    gap: 0.5rem;

    button {
      background-color: black;
      color: white;
      border-radius: 30px;
      flex-basis: 50%;
      padding: 0.2rem;
    }
  }
`;
