import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from 'react-bootstrap/Carousel';

import Blank from '../images/dtk_blank.png'
import Brain from '../images/dtk_brain.png'
import Crypto from '../images/dtk_crypto.png'
import Home from '../images/dtk_home.png'
import Stocks from '../images/dtk_stocks.png'
import Trend from '../images/dtk_trend.png'

const IndexPage = ({data}) => (

  <Layout>
    <Seo title="Home" />
    <div className=''>
      <h1>
        Dreams Through Knowledge
      </h1>  

      <Carousel interval={2000} fade>
        <Carousel.Item>
          <img
            className="d-block w-50 m-auto bg-black"
            src={Blank}
            alt="Blank"
          />
          <Carousel.Caption>
            <h3>Learn new ways to make money</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-50 m-auto bg-black"
            src={Brain}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Learn how to expand your mind</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-50 m-auto bg-black"
            src={Crypto}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Get invested into crypto</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-50 m-auto bg-black"
            src={Home}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Make a living in real estate</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-50 m-auto bg-black"
            src={Stocks}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Invest with expert traders</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-50 m-auto bg-black"
            src={Trend}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Get an understanding of emerging technologies</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      {data.allContentfulHero.edges.map(({ node, index }) => (
        <div>
          <h3>{node.title}</h3>
          <p>{node.description}</p>
        </div>          
      ))}  


      {/* <div className="img_carousel">
        <img src={Blank} alt="blank" />
        <img src={Stocks} alt="stocks" />
        <img src={Crypto} alt="crypto" />
        <img src={Home} alt="home" />
        <img src={Trend} alt="trend" />
        <img src={Brain} alt="brain" />
      </div> */}
    </div>
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