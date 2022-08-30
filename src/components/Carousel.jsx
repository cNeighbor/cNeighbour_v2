import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Carousel = () => {
  const images = [
    "https://thumbs.dreamstime.com/b/university-students-devices-preparing-classes-university-students-devices-preparing-classes-having-break-157083256.jpg",
    "https://github.com/cNeighbor/cNeighbour_v1/blob/master/src/images/header1.jpg?raw=true",
    "https://github.com/cNeighbor/cNeighbour_v1/blob/master/src/images/header4.jpg?raw=true",
  ];

  return (
    <Component>
        <Fade>
            <div className="each-slide">
            <div>
                <img src={images[0]} />
            </div>
            <Text>
                <h1>Navigation just got easier</h1>
                <p>Navigate through your campus with ease as never before</p>
            </Text>
            </div>
            <div className="each-slide">
            <div>
                <img src={images[1]} />
            </div>
            <Text>
                <h1>Navigation just got easier</h1>
                <p>Navigate through your campus with ease as never before</p>
            </Text>
            </div>
            <div className="each-slide">
            <div>
                <img src={images[2]} />
            </div>
            <Text>
                <h1>Navigation just got easier</h1>
                <p>Navigate through your campus with ease as never before</p>
            </Text>
            </div>
        </Fade>
    </Component>
  );
};

export default Carousel;

const Component = styled.div`
    .each-slide{
        position: relative;
    }

    img {
        width: 100% !important;
        height: 330px !important;
    }
`

const Text = styled.div`
    position: absolute;
    bottom: 50px;
    color: white;
    text-align: left;
    margin: 10px;
    font-family: times new roman;

    h1 {
        font-size: 30px;
    }

    p {
        font-size: 20px;
    }
`