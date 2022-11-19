import React from 'react'
import styled from "styled-components";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";


function Carousels({carouseldata, id, heading}) {
    const slideLeft = () => {
        let slider = document.getElementById(`${id}`);
        slider.scrollLeft = slider.scrollLeft + 500;
      }
  return (
    <Container>
      <section>
        <div>
          <h2>{heading}</h2>
        </div>
        <div className="carouselNav">
          <button className="nextBtn" onClick={slideLeft}>
            <FontAwesomeIcon className="chevron" icon={faChevronRight} />
          </button>
          <button className="view">
            View all
          </button>
        </div>
      </section>

      <MediaScroller id={id}>
        {
          carouseldata && carouseldata.map((data, index) => {
            const { name, rating,category,duration,image, ...rest} = data;
            return(
              <li className="media_group" key={name + index}>
                  <Card
                    image={image}
                    name={name}
                    rating={rating}
                    category={category}
                    duration={duration}
                  />
                </li>
            );
        
          })        
        }
      </MediaScroller>
    </Container>
  )
}

export default Carousels;

const Container = styled.div`
  section{
    display: flex;
    justify-content: space-between;
  }
  h2{
    @media (min-width: 961px) {
      font-size: 2.2rem;
      font-weight: 500;
    }
    
  }
  .carouselNav {
    margin: 20px;
    margin-top: 40px;
    text-align: left;
    display: flex;
    justify-content: flex-end;
    flex-basis: 50%;
    gap: 1rem;

    .view {
      background: #ffc70a;
      width: 100%;
      border-radius: 20px;
      color: white;
      padding: 0.5rem;
      @media (min-width: 961px) {
        width: 20%;
      }
    }
    .nextBtn {
      width: 40px;
      height: 40px;
      border: 3px solid #ffc70a;
      border-radius: 50%;
    }

    .chevron {
      color: #ffc70a;
    }
  }
  #slider:: -webkit-scrollbar{
    display: none;
  }
`;
const MediaScroller = styled.ul`
  display: grid;
  grid-auto-flow: column;
  padding: 1rem;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 1rem;
  grid-auto-columns: 98%;
  gap: 1.5rem;
  transition: transform 250ms ease-in-out;
  overflow-X: scroll;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media (min-width: 600px) {
    grid-auto-columns: 45%;
  }
  @media (min-width: 961px) {
    grid-auto-columns: 23%;
  }

  .media_group {
    list-style-type: none;
    display: grid;
    grid-template-inline: column;
    grid-auto-flow: column;
    gap: 1rem;
    scroll-snap-align: start;
    @media (min-width: 969px) {
    }
  }
`;