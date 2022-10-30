import React from 'react'
import styled from 'styled-components'

import logo from "../images/logo.png"

const LgNavbar = () => {
  return (
    <Container>
        <First>
            <img src={logo} className="logo" alt="Logo" />
            <Search>
                <i className="fa fa-search"></i>
                <input type="search" placeholder='Place, Food, Drinks, etc' />
            </Search>
            <Navs>
                <p>Landmarks</p>
                <p>My campus</p>
                <p>Recent</p>
            </Navs>
        </First>

        <Buttons>
            <button className='login'>Log in</button>
            <button className='signup'>Sign up</button>
        </Buttons>
    </Container>
  )
}

export default LgNavbar

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    padding: 20px;

    .logo {
        width: 100px;
    }

    @media (max-width: 768px){
        display: none;
    }
`

const First = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Search = styled.div`
    display: flex;
    position: relative;
    margin-top: 10px;
    margin-left: 3rem;

    input {
        width: 40vw;
        height: 43px;
        border-radius: 25px;
        text-align: center;
    }

    .fa-search {
        position: absolute;
        font-size: 20px;
        top: 10px;
        left: 33px;
    }

    .filter {
        position: absolute;
        right: 33px;
        top: 12px;
        width: 22px;
    }
`

const Navs = styled.div`
    margin-left: 3rem;
    display: flex;
    
    p{
        padding-right: 2rem;
        margin-top: 1rem;
    }

    @media (max-width: 1200px){
        display: none;
    }
`

const Buttons = styled.div`
    margin-left: auto;

    button{
        width: 80px;
        height: 40px;
        text-align: center;
        border: 1px solid black;
        margin-right: 10px;
        margin-top: 1rem;
    }

    .signup {
        background: black;
        color: white;
    }
`