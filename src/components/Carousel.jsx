import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image1 from "../images/4.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"

const Carousel = () => {
  const images = [
    image1,
    image2,
    image3,
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

            <div className="each-slide">
                <div>
                    <img src={images[3]} />
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
        height: 300px !important;
        opacity: 0.5;
    }
`

const Text = styled.div`
    position: absolute;
    bottom: 50px;
    color: black;
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