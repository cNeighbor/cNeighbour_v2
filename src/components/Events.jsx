import React from "react";
import styled from "styled-components";
import Card from "./Card";
import image from "../images/event.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

function Events() {
  const slideLeft = () => {
    let slider = document.getElementById('events_slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <Container>
      <section>
        <div>
          <h2>Upcoming events</h2>
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

      <MediaScroller id="events_slider">
        <li className="media_group">
          <Card
            image={image}
            name="vet hall"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>
        <li className="media_group">
          <Card
            image={image}
            name="jimbazz"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>

        <li className="media_group">
          <Card
            image={image}
            name="stephanie house"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>
        <li className="media_group">
          <Card
            image={image}
            name="abuja"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>
        <li className="media_group">
          <Card
            image={image}
            name="timmys house"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>
        <li className="media_group">
          <Card
            image={image}
            name="Goall"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>
        <li className="media_group">
          <Card
            image={image}
            name="lorem"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>
        <li className="media_group">
          <Card
            image={image}
            name="Phoneie"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>
        <li className="media_group">
          <Card
            image={image}
            name="Vivien place"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>
        <li className="media_group">
          <Card
            image={image}
            name="Yongg"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>
        <li className="media_group">
          <Card
            image={image}
            name="Routy"
            rating={4.5}
            category="Hotel"
            duration="All day"
          />
        </li>
      </MediaScroller>
    </Container>
  );
}
export default Events;

const Container = styled.div`
  section{
    display: flex;
    justify-content: space-between;
  }
  h2{
    font-size: 2.2rem;
    font-weight: 500;
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
