import React from 'react'
import styled from 'styled-components'

import filter from "../images/filter.png"

function Search() {
  return (
    <Container>
        <i className="fa fa-search"></i>
        <input type="search" placeholder='Place, Food, Drinks, etc' />
        <img src={filter} className="filter" alt="filter" srcset="" />
    </Container>
  )
}

export default Search

const Container = styled.div`
    display: flex;
    position: relative;

    input {
        width: 100%;
        margin: 0px 20px 0px 20px;
        height: 50px;
        border-radius: 25px;
        text-align: center;
    }

    .fa-search {
        position: absolute;
        font-size: 25px;
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