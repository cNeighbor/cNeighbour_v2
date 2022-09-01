import React from 'react'
import styled from 'styled-components'

function Jumbotron() {
  return (
    <Container>
        <h1>Let's make your campus life special</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam deleniti ipsum, cumque voluptatibus quaerat obcaecati quidem qui vel cupiditate exercitationem aspernatur libero maxime animi</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam deleniti ipsum, cumque!</p>

        <button>Create an account</button>
    </Container>
  )
}

export default Jumbotron

const Container = styled.div`
    text-align: left;
    background: #FFC70A;
    border-radius: 15px;
    margin: 15px;
    margin-top: 50px;
    padding: 20px;
    color: white;

    h1{
        font-size: 23px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    button{
        width: 100%;
        border: 1px solid white;
        border-radius: 20px;
        margin-top: 30px;
        padding: 8px;
    }
`