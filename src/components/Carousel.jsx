import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
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