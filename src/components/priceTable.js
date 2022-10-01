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
                <Accordion.Header className='accordian'>Monthly Details</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className='accordian'>Yearly Details</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header className='accordian'>Life Time Details</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default PriceTable