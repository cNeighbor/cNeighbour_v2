import React from "react";
import styled from "styled-components";
import image from "../images/event.png";
import Card from "./Card";

function HorizontalScroll() {
  return (
      <MediaScroller>
        <div className="media_group">
          <Card
            image={image}
            name="A night with slim saint"
            rating="4.5"
            category="Hotel"
            duration="All day"
          />
          <Card
            image={image}
            name="A night with slim saint"
            rating="4.5"
            category="Hotel"
            duration="All day"
          />
          <Card
            image={image}
            name="A night with slim saint"
            rating="4.5"
            category="Hotel"
            duration="All day"
          />
          <Card
            image={image}
            name="A night with slim saint"
            rating="4.5"
            category="Hotel"
            duration="All day"
          />
        </div>
        <div className="media_group">
        <Card
          image={image}
          name="A night with slim saint"
          rating="4.5"
          category="Hotel"
          duration="All day"
        />
        <Card
          image={image}
          name="A night with slim saint"
          rating="4.5"
          category="Hotel"
          duration="All day"
        />
        <Card
          image={image}
          name="A night with slim saint"
          rating="4.5"
          category="Hotel"
          duration="All day"
        />
        <Card
          image={image}
          name="A night with slim saint"
          rating="4.5"
          category="Hotel"
          duration="All day"
        />
      </div>
      <div className="media_group">
        <Card
          image={image}
          name="A night with slim saint"
          rating="4.5"
          category="Hotel"
          duration="All day"
        />
        <Card
          image={image}
          name="A night with slim saint"
          rating="4.5"
          category="Hotel"
          duration="All day"
        />
        <Card
          image={image}
          name="A night with slim saint"
          rating="4.5"
          category="Hotel"
          duration="All day"
        />
        <Card
          image={image}
          name="A night with slim saint"
          rating="4.5"
          category="Hotel"
          duration="All day"
        />
      </div>
      </MediaScroller>
   
  );
}

export default HorizontalScroll;

const MediaScroller = styled.div`
display: grid;
grid-auto-flow: column;
  padding: 1rem;
  scroll-snap-type:inline mandatory;
  scroll-padding-inline: 1rem;
  grid-auto-columns: 98%;
  overflow-x: auto;
overscroll-behavior-inline: contain;


  .media_group {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    scroll-snap-align: start;
  }
`;

  


