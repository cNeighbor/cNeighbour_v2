import React,{useState} from 'react'
import styled from "styled-components";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";


function Carousels({carouseldata, id, heading}) {
  const [clicked, setClicked] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1200);

  const slideLeft = () => {
    let slider = document.getElementById(`${id}`);

    if(scrollDirection === 1200){
      setScrollDirection(-1200)
    } else{
      setScrollDirection(1200)
    }
    slider.scrollLeft = slider.scrollLeft + scrollDirection;
    setClicked(!clicked);
  };
  return (
    <Container>
      <section>
        <div>
          <h2>{heading}</h2>
        </div>
        <div className="carouselNav">
          <button className={clicked ? "clicked" : "nextBtn"} onClick={slideLeft}>
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
    font-size: 23px;
    font-weight: bold;
    margin-left: 15px;
    margin-top: 40px;

    @media (min-width: 760px) {
        font-size: 35px;
        margin: 20px;
        font-weight: bold;
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
      width: 60%;
      border-radius: 20px;
      color: white;
      padding: 0.5rem;
      @media (min-width: 961px) {
        width: 20%;
      }
    }
    .nextBtn, .clicked {
      visibility: hidden;
    }
    @media (min-width: 961px){
      .nextBtn {
        visibility: visible;
        width: 40px;
        height: 40px;
        border: 3px solid #ffc70a;
        border-radius: 50%;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        transition: 0.3s;
      }
      .clicked {
        visibility: visible;
        width: 40px;
        height: 40px;
        border: 3px solid #ffc70a;
        border-radius: 50%;
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transform: rotate(180deg);
        transition: 0.3s;
      }

    }
    
    .chevron{
      visibility: hidden;
    }
    @media (min-width: 961px){
      .chevron {
        visibility: visible;
        color: #ffc70a;
      }
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