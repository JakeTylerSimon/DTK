import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Blank from '../images/dtk_blank.png'
import Brain from '../images/dtk_brain.png'
import Crypto from '../images/dtk_crypto.png'
import Home from '../images/dtk_home.png'
import Stocks from '../images/dtk_stocks.png'
import Trend from '../images/dtk_trend.png'

const IndexPage = () => (

  <Layout>
    <Seo title="Home" />
    <div className=''>
      <h1>
        Dreams Through Knowledge
      </h1>

      <div className="img_carousel">
        <img src={Blank} alt="blank" />
        <img src={Stocks} alt="stocks" />
        <img src={Crypto} alt="crypto" />
        <img src={Home} alt="home" />
        <img src={Trend} alt="trend" />
        <img src={Brain} alt="brain" />
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

// export const query = graphql`query MyQuery {
//   allContentfulHero {
//     edges {
//       node {
//         title
//         description
//         id
//         image {
//           file {
//             url
//           }
//         }
//       }
//     }
//   }
// }`