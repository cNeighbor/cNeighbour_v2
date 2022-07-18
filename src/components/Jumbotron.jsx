import React from 'react'
import styled from 'styled-components'

const Jumbotron = ({title, icon}) => {
    return (
        <div>
            <Section>
                <div>
                    <h1>{icon}</h1>
                    <p>{title}</p>
                </div>
            </Section>
        </div>
    )
}

export default Jumbotron

const Section = styled.div `
    min-height: 240px;
    min-width: 50%;
    border-radius: 10px;
    margin: 20px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
    box-shadow: 0px 8px 6px #b8b9be, -3px -3px 6px #b8b9be;
    cursor: pointer;

    h1{
        font-size: 40px;
        font-weight: bold;
    }

    @media(max-width: 960px){
        min-height: 100px;
        border-radius: 6px;
        
        h1{
            font-size: 20px;
        }
    }
`