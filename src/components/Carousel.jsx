import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image1 from "../images/carousel1.png"
import image2 from "../images/carousel2.png"
import image3 from "../images/carousel3.png"

const Carousel = () => {
  const images = [
    image1,
    image2,
    image3,
  ];

  return (
    <div>
    <Component>
        <Fade>
            <div className="each-slide">
                <div>
                    <img src={images[0]} />
                </div>
            </div>

            <div className="each-slide">
                <div>
                    <img src={images[1]} />
                </div>
            </div>

            <div className="each-slide">
                <div>
                    <img src={images[2]} />
                </div>
            </div>
        </Fade>
    </Component>

    <Ad>
        <div>
            <p>Create a free account to gain full access, and be limitless. </p>
            <button>Create account</button>
        </div>
    </Ad>
    </div>
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
    }
`

const Ad = styled.div`
    background: #28282B;
    color: white;
    padding: 10px;

    p{
      font-size: 13px;
    }

    div {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }

    button{
        background: #FEC70A;
        border-radius: 25px;
        width: 100%;
        height: 43px;
        font-size: 14px;

        @media (max-width: 320px) {
            font-size: 12px;
        }
    }
`