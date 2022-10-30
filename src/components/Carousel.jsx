import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import image1 from "../images/carousel-bg1.png"
import image2 from "../images/carousel-bg2.png"
import image3 from "../images/carousel-bg3.png"
import image4 from "../images/carousel-bg4.png"

const Carousel = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
  ];

  return (
    <div>
    <Component>
        <Fade>
            {/* large devices images */}
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

            <div className="each-slide">
                <div>
                    <img src={images[3]} />
                </div>
            </div>
        </Fade>
    </Component>

    <Ad>
        <div>
            <p className='p-small'>Create a free account to gain full access. </p>
            <Text>
                <h3><span>Create a free account</span><br /> Gain complete access to your campus neighbour</h3>
            </Text>
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
        height: 270px !important;

        @media (min-width: 768px) {
            height: 500px !important;
        }
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

    @media (min-width: 768px) {
        display: flex;
        position: relative;

        p{
            display: none !important;
        }

        button{
            width: 150px;
            position: absolute;
            right: 3rem;
        }
    }
`

const Text = styled.div`
    text-align: left;
    margin-left: 3rem;

    span {
        font-weight: bold;
        font-size: 23px;
    }
    @media (max-width: 768px) {
        display: none !important;
    }
`