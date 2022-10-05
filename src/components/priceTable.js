// import React from 'react'
// import Button from 'react-bootstrap/Button'
// import Popover from 'react-bootstrap/Popover'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

// const RootIndex = () => {
//     const popover = (
//         <Popover id="popover-basic">
//           <Popover.Body>
//          - Copy / Move between your attached drives and accounts <br/>- Upload files to multiple drives / folders at once
//           </Popover.Body>
//         </Popover>
//       );

//       const Example = () => (
//         <OverlayTrigger trigger="click" placement="top" overlay={popover}>
//           <img variant="success" src="../images/astro.png" alt="" />
//         </OverlayTrigger>
//       ); 
    
//     return (
//         <div id='prices' className="pricing-wrapper">
//             <h2>Pricing</h2>
//             <table class="features">
//                 <thead>
//                     <tr className='head-rows'>
//                         <th class="features__cell features__cell--bold features__cell--shaded features__cell--large color"></th> 
//                         <th class="features__cell features__cell--bold features__cell--shaded features__cell--large color">Monthly</th>
//                         <th class="features__cell features__cell--bold features__cell--shaded features__cell--large color">Annually</th>
//                         <th class="features__cell features__cell--bold features__cell--shaded features__cell--large color">Life-Time</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr >
//                         <td class="features__cell color">Amazing Plans</td>
//                         <td class="features__cell features__cell--bold features__cell--large"><span>$199</span>
//                             <button className="button primary"><a href="">Select Plan</a></button>
//                         </td>
//                         <td class="features__cell features__cell--bold features__cell--large"><span>$1,999</span>
//                             <button className="button primary"><a href="">Select Plan</a></button>
//                         </td>
//                         <td class="features__cell features__cell--bold features__cell--large"><span>$5,999</span>
//                             <button className="button primary"><a href="">Select Plan</a></button>
//                         </td>
//                     </tr>
//                     <tr className='head-rows'>
//                         <td class="features__cell features__cell--bold features__cell--shaded color" >Features</td>
//                         <td class="features__cell features__cell--bold features__cell--shaded color"></td>
//                         <td class="features__cell features__cell--bold features__cell--shaded color" ></td>
//                         <td class="features__cell features__cell--bold features__cell--shaded color" ></td>
//                     </tr>
//                     <tr className='data-rows'>
//                         <td class="features__cell color">
//                             Test Data
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             <span class="features__tick"></span>
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             <span class="features__tick"></span>
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             <span class="features__tick"></span>
//                         </td>
//                     </tr>
//                     <tr className='data-rows'>
//                         <td class="features__cell color">
//                             Test Data
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             <span class="features__tick"></span>
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             <span class="features__tick"></span>
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             <span class="features__tick"></span>
//                         </td>
//                     </tr>
//                     <tr className='data-rows'>
//                         <td class="features__cell color">
//                             Test Data
//                         </td>
//                         <td class="features__cell features__cell--center"> </td>
//                         <td class="features__cell features__cell--center">
//                             <span class="features__tick"></span>
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             <span class="features__tick"></span>
//                         </td>
//                     </tr>
//                     <tr className='data-rows'>
//                         <td class="features__cell color">
//                             Test Data
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             Test Data    
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             Test Data
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             Test Data
//                         </td>
//                     </tr>
//                     <tr className='data-rows'>
//                         <td class="features__cell color">
//                             Test Data
//                            {/* <Example/> */}
//                         </td>
//                         <td class="features__cell features__cell--center"> </td>
//                         <td class="features__cell features__cell--center">
//                             <span class="features__tick"></span>
//                         </td>
//                         <td class="features__cell features__cell--center">
//                             <span class="features__tick"></span>
//                         </td>
//                     </tr>
//                     <tr className='data-rows'>
//                         <td class="features__cell color">
//                             Test Data
//                         </td>
//                         <td class="features__cell features__cell--center">

//                         </td>
//                         <td class="features__cell features__cell--center features__feature">
//                             - Test Data <span class="features__small">
//                                 Test Data    
//                             </span>
//                         </td>
//                         <td class="features__cell features__cell--center features__feature">
//                             - Test Data <span class="features__small">
//                                 Test Data
//                             </span>
//                             - Test Data <span class="features__small ">
//                                 Test Data
//                             </span>
//                             - Test Data <span class="features__small">
//                                 Test Data
//                             </span>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// export default RootIndex

import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const PriceTable = () => {
  return (
    <div id='prices' className='price_wrapper'>
        <h2 className='priceHeader'>Pricing</h2>
        <div className="price_content">
            <div className="single-price">
                <h1>Monthly</h1>
                <div className="price">
                    <h3>$200</h3>
                </div>
                <a href="https://launchpass.com/dtk/black">Select Plan</a>
            </div>

            <div className="single-price">
                <h1>Annually</h1>
                <div className="price">
                    <h3>$2,000</h3>
                </div>
                <a href="https://launchpass.com/dtk/gold">Select Plan</a>
            </div>

            <div className="single-price">
                <h1>Life-Time</h1>
                <div className="price">
                    <h3>$6,000</h3>
                </div>
                <a href="https://launchpass.com/dtk/platinum">Select Plan</a>
            </div>
        </div>

        <h2 className='price_details'>Pricing Details</h2>

        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='accordian'>Monthly Details ⚫</Accordion.Header>
                <Accordion.Body>
                    <small className='price_small'>* What benefits come with the service</small>
                    <h2 className='price_detail_header'>DTK Community Discord</h2>
                    <div className='price_detail_content'>
                        <ul className='price_content_content'> <b>Stay updated</b> 
                            <li>Stock / Options Alerts</li>
                            <li>Daily Watchlist</li>
                            <li>Live Important News Alerts</li>
                            <li>Analyst Ratings</li>
                            <li>Option Updates</li>
                            <li>Earnings Updates</li>
                            <li>Daily / weekly Economic Calendar</li>
                            <li>Updated Stock Upgrades / Downgrades</li>
                        </ul>
                        <ul className='price_content_content'> <b>Live Community Chat Lounges</b> 
                            <li>Stocks - Options Chat</li>
                            <li>Squeeze Plays</li>
                            <li>NFT / Crypto</li>
                            <li>Plus More...</li>
                        </ul>
                    </div>

                    <div className='price_detail_content'>
                        <ul className='price_content_content'> <b>Live Trading Alerts</b> 
                            <li>Option Trade Alerts</li>
                            <li>Small Account Alerts</li>
                            <li>Small Cap / Shares Alerts</li>
                            <li>Long Term Portfolio *Veryimportant*</li>
                            <li>Member Trades</li>
                        </ul>
                        <ul className='price_content_content'> <b>Ai Alerts</b> 
                            <li>Options AI</li>
                            <li>Stock Breakouts</li>
                            <li>Scalp Alerts</li>
                            <li>Large Sweeps</li>
                            <li>Block Trades</li>
                            <li>Insider Trading</li>
                            <li>Crypto Signal Bots</li>
                            <li>Crypto Breakouts</li>
                        </ul>
                    </div>

                    <div className='price_detail_content'>
                        <ul className='price_content_content'> <b>Education / Tools</b> 
                            <li>Trading Psychology</li>
                            <li>Money Management</li>
                            <li>Trading 101 / Basics</li>
                            <li>Option Trading 101</li>
                            <li>Day Trading 101</li>
                            <li>Hundreds of Trading Books / Videos ($10,000 Value)</li>
                        </ul>
                        <ul className='price_content_content'> <b>DTK Voice Chat *Very important*</b> 
                            <li>Come in and join Dp and the team as he Trades
                                LIVE on Voice Chat... that's right, LIVE!
                            </li>
                            <li>The team is live on VC for an average of 2-4 hours</li>
                            <li>This is the fastest way to not only get live trades but to learn with the team</li>
                        </ul>
                    </div>
                    <b className='price_benefit'>Discounts on Workshops</b> <br/>
                    <b className='price_benefit'>Discount on DTK Store</b>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className='accordian'>Yearly Details 🔘</Accordion.Header>
                <Accordion.Body>
                <small className='price_small'>* What benefits come with the service</small>
                    <h2 className='price_detail_header'>Discord Price Reduction</h2>
                    <p className='discord_red'>$300 - $400 price reduction on the DTK Community Discord</p>
                    <h2 className='price_detail_header'>DTK Community Discord</h2>
                    <div className='price_detail_content'>
                        <ul className='price_content_content'> <b>Stay updated</b> 
                            <li>Stock / Options Alerts</li>
                            <li>Daily Watchlist</li>
                            <li>Live Important News Alerts</li>
                            <li>Analyst Ratings</li>
                            <li>Option Updates</li>
                            <li>Earnings Updates</li>
                            <li>Daily / weekly Economic Calendar</li>
                            <li>Updated Stock Upgrades / Downgrades</li>
                        </ul>
                        <ul className='price_content_content'> <b>Live Community Chat Lounges</b> 
                            <li>Stocks - Options Chat</li>
                            <li>Squeeze Plays</li>
                            <li>NFT / Crypto</li>
                            <li>Plus More...</li>
                        </ul>
                    </div>

                    <div className='price_detail_content'>
                        <ul className='price_content_content'> <b>Live Trading Alerts</b> 
                            <li>Option Trade Alerts</li>
                            <li>Small Account Alerts</li>
                            <li>Small Cap / Shares Alerts</li>
                            <li>Long Term Portfolio *Veryimportant*</li>
                            <li>Member Trades</li>
                        </ul>
                        <ul className='price_content_content'> <b>Ai Alerts</b> 
                            <li>Options AI</li>
                            <li>Stock Breakouts</li>
                            <li>Scalp Alerts</li>
                            <li>Large Sweeps</li>
                            <li>Block Trades</li>
                            <li>Insider Trading</li>
                            <li>Crypto Signal Bots</li>
                            <li>Crypto Breakouts</li>
                        </ul>
                    </div>

                    <div className='price_detail_content'>
                        <ul className='price_content_content'> <b>Education / Tools</b> 
                            <li>Trading Psychology</li>
                            <li>Money Management</li>
                            <li>Trading 101 / Basics</li>
                            <li>Option Trading 101</li>
                            <li>Day Trading 101</li>
                            <li>Hundreds of Trading Books / Videos ($10,000 Value)</li>
                        </ul>
                        <ul className='price_content_content'> <b>DTK Voice Chat *Very important*</b> 
                            <li>Come in and join Dp and the team as he Trades
                                LIVE on Voice Chat... that's right, LIVE!
                            </li>
                            <li>The team is live on VC for an average of 2-4 hours</li>
                            <li>This is the fastest way to not only get live trades but to learn with the team</li>
                        </ul>
                    </div>
                    <b className='price_benefit'>Discounts on Workshops</b> <br/>
                    <b className='price_benefit'>Discount on DTK Store</b> <br/>
                    <b className='price_benefit'>Monthly Coaching Calls</b>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header className='accordian'>Life Time Details 📀</Accordion.Header>
                <Accordion.Body>
                <small className='price_small'>* What benefits come with the service</small>
                    <h2 className='price_detail_header'>Discord Price Reduction</h2>
                    <p className='discord_red'>Workshops are 100% free</p>
                    <p className='discord_red'>DTK store is 50% off</p>
                    <h2 className='price_detail_header'>DTK Community Discord</h2>
                    <div className='price_detail_content'>
                        <ul className='price_content_content'> <b>Stay updated</b> 
                            <li>Stock / Options Alerts</li>
                            <li>Daily Watchlist</li>
                            <li>Live Important News Alerts</li>
                            <li>Analyst Ratings</li>
                            <li>Option Updates</li>
                            <li>Earnings Updates</li>
                            <li>Daily / weekly Economic Calendar</li>
                            <li>Updated Stock Upgrades / Downgrades</li>
                        </ul>
                        <ul className='price_content_content'> <b>Live Community Chat Lounges</b> 
                            <li>Stocks - Options Chat</li>
                            <li>Squeeze Plays</li>
                            <li>NFT / Crypto</li>
                            <li>Plus More...</li>
                        </ul>
                    </div>

                    <div className='price_detail_content'>
                        <ul className='price_content_content'> <b>Live Trading Alerts</b> 
                            <li>Option Trade Alerts</li>
                            <li>Small Account Alerts</li>
                            <li>Small Cap / Shares Alerts</li>
                            <li>Long Term Portfolio *Veryimportant*</li>
                            <li>Member Trades</li>
                        </ul>
                        <ul className='price_content_content'> <b>Ai Alerts</b> 
                            <li>Options AI</li>
                            <li>Stock Breakouts</li>
                            <li>Scalp Alerts</li>
                            <li>Large Sweeps</li>
                            <li>Block Trades</li>
                            <li>Insider Trading</li>
                            <li>Crypto Signal Bots</li>
                            <li>Crypto Breakouts</li>
                        </ul>
                    </div>

                    <div className='price_detail_content'>
                        <ul className='price_content_content'> <b>Education / Tools</b> 
                            <li>Trading Psychology</li>
                            <li>Money Management</li>
                            <li>Trading 101 / Basics</li>
                            <li>Option Trading 101</li>
                            <li>Day Trading 101</li>
                            <li>Hundreds of Trading Books / Videos ($10,000 Value)</li>
                        </ul>
                        <ul className='price_content_content'> <b>DTK Voice Chat *Very important*</b> 
                            <li>Come in and join Dp and the team as he Trades
                                LIVE on Voice Chat... that's right, LIVE!
                            </li>
                            <li>The team is live on VC for an average of 2-4 hours</li>
                            <li>This is the fastest way to not only get live trades but to learn with the team</li>
                        </ul>
                    </div>
                    <b className='price_benefit'>Discounts on Workshops</b> <br/>
                    <b className='price_benefit'>Discount on DTK Store</b> <br/>
                    <b className='price_benefit'>Monthly Coaching Calls</b>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default PriceTable