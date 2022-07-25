import React from 'react'
import styled from "styled-components"
import Businesses from "../components/Businesses"

const BusinessList = () => {
    
    return (
        <div>
            <Form className="flex justify-center mt-5">
                <input type="text" className="inputField" placeholder="Enter the Place.." />
                <input type="submit" className="button" value="Search" />
            </Form>
            <Businesses />
        </div>
    )
}

export default BusinessList

const Form = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    margin-top: 30px;

    input {
        width: 70%;
        border: none;
        outline: none;
        background: none;
        border-bottom: 2px solid black;
    }

    .button {
        background: blue;
        color: white;
        border-radius: 7px;
        height: 45px;
        width: 30%;
        margin-left: 10px;
    }
`