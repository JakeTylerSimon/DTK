import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from '../components/contact'
import PriceTable from '../components/priceTable'
import Newsletter from '../components/newsletter'
import About from '../components/about'
import Features from '../components/features'
import Special from '../components/special'

import Carousel from 'react-bootstrap/Carousel';

import Blank from '../images/2.svg'
import Brain from '../images/3.svg'
import Crypto from '../images/4.svg'
import Home from '../images/8.svg'
import Stocks from '../images/10.svg'
import Trend from '../images/12.svg'
import Moon from '../images/moon.png'

const IndexPage = ({data}) => (

  <Layout>
    <Seo title="Home" />
    <div className='index'>

      <img className="moon-icon" src={Moon} alt="glow" /> 

      <Carousel slide={false} interval={1500} fade>
        <Carousel.Item>
          <img
            className="d-block w-50 m-auto"
            src={Blank}
            alt="Blank"
          />
          <Carousel.Caption>
            <h4>Learn new ways to make money</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-50 m-auto"
            src={Brain}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4>Learn how to expand your mind</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-50 m-auto"
            src={Crypto}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4>Get invested into crypto</h4>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-50 m-auto"
            src={Home}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4>Make a living in real estate</h4>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-50 m-auto"
            src={Stocks}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4>Invest with expert traders</h4>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-50 m-auto"
            src={Trend}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4>Get an understanding of emerging technologies</h4>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      {/* {data.allContentfulHero.edges.map(({ node, index }) => (
        <div>
          <h3>{node.title}</h3>
          <p>{node.description}</p>
        </div>          
      ))}   */}

      <button className="joinNow">
        <a href="#prices">Join Now</a> 
      </button>
    </div>

    <About />
    <Special />
    <Features />
    {/* <Newsletter /> */}
    <PriceTable />
    <Contact />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
{
  allContentfulHero {
    edges {
      node {
        title
        description
        id
        image {
          url
        }
      }
    }
  }
}`