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

import Blank from '../images/dtk_blank.png'
import Brain from '../images/dtk_brain.png'
import Crypto from '../images/dtk_crypto.png'
import Home from '../images/dtk_home.png'
import Stocks from '../images/dtk_stocks.png'
import Trend from '../images/dtk_trend.png'
import Moon from '../images/moon.png'

const IndexPage = ({data}) => (

  <Layout>
    <Seo title="Home" />
    <div className=''>

      <img className="moon-icon" src={Moon} alt="glow" /> 

      <Carousel interval={1500} fade>
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
        Join Now
      </button>
    </div>

    <About />
    <Special />
    <Features />
    <Newsletter />
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