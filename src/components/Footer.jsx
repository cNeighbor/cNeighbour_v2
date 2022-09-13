import React from 'react'
import styled from 'styled-components'

import logo from "../images/logo.png"

function Footer() {
  return (
    <Container>
      <img src={logo} className="md:hidden" width="90" alt="user" />
      <p className="desc">Campus neighbour is the #1 university companion, guiding students and growing businesses.</p>
      <Follow>
        <h3>Follow us</h3>
        <div>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </Follow>

      <section className="section">
        <div>
          <h3>Categories</h3>
          <ul>
            <li>Discover</li>
            <li>Faculties</li>
            <li>Real Estate</li>
            <li>Church</li>
            <li>Business</li>
            <li>Health care</li>
            <li>Events</li>
            <li>Transportation</li>
            <li>Media</li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>List Business</li>
            <li>Referral program</li>
            <li>Join our Discord</li>
            <li>Become a sponsor</li>
            <li>Health care</li>
            <li>We're hiring</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div>
          <h3>Legal</h3>
          <ul>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>License agreement</li>
            <li>Support center</li>
          </ul>
        </div>

        <div>
          <h3>Help & Support</h3>
          <ul>
            <li>Hotline</li>
            <li>Email</li>
            <li>Customer Service</li>
            <li>Join our Discord</li>
          </ul>
        </div>
      </section>

      <hr />

      <p className="copyright">© 2022 Campus neighbour, All rights reserved.</p>

    </Container>
  )
}

export default Footer

const Container = styled.div`
  background: whitesmoke;
  margin-top: 50px;
  padding: 30px 20px;
  text-align: left;

  h1{
    font-size: 20px;
    font-weight: bold;
    color: #FFC70A;
  }

  .desc{
    margin-top: 15px;
  }

  h3{
    font-size: 18px;
    font-weight: bold;
  }

  .section{
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    margin-top: 25px;

    @media (max-width: 320px) {
      max-width: 100%;
    }
  }

  li{
    margin-top: 15px;
    color: gray;
    font-size: 15px;
  }

  hr{
    margin-top: 20px;
  }

  .copyright{
    color: gray;
    font-size: 14px;
    font-weight: bold;
    margin-top: 17px;
    text-align: center;
  }
`

const Follow = styled.div`
  margin-top: 15px;

  div{
    display: flex;
    justify-content: space-between;
    width: 60%;
    font-size: 22px;
    color: gray;
    margin: 20px 0px;
  }
`