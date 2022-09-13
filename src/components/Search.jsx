import React from 'react'
import styled from 'styled-components'

function Search() {
  return (
    <Container>
        <i className="fa fa-search"></i>
        <input type="search" placeholder='Place, Food, Drinks, etc' />
    </Container>
  )
}

export default Search

const Container = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 10px;

    input {
        width: 100%;
        margin: 0px 20px 0px 20px;
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