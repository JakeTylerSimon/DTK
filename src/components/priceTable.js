import React from 'react'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const RootIndex = () => {
    // const popover = (
    //     <Popover id="popover-basic">
    //       <Popover.Body>
    //      - Copy / Move between your attached drives and accounts <br/>- Upload files to multiple drives / folders at once
    //       </Popover.Body>
    //     </Popover>
    //   );

    //   const Example = () => (
    //     <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    //       <img variant="success" src="../images/astro.png" alt="" />
    //     </OverlayTrigger>
    //   ); 
    
    return (
        <div className="pricing-wrapper">
            <h2>Pricing</h2>
            <table class="features">
                <thead>
                    <tr className='head-rows'>
                        <th class="features__cell features__cell--bold features__cell--shaded features__cell--large color"></th> 
                        <th class="features__cell features__cell--bold features__cell--shaded features__cell--large color">Monthly</th>
                        <th class="features__cell features__cell--bold features__cell--shaded features__cell--large color">Annually</th>
                        <th class="features__cell features__cell--bold features__cell--shaded features__cell--large color">Life-Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td class="features__cell color">Amazing Plans</td>
                        <td class="features__cell features__cell--bold features__cell--large"><span>$199</span>
                            <button className="button primary"><a href="">Select Plan</a></button>
                        </td>
                        <td class="features__cell features__cell--bold features__cell--large"><span>$1,999</span>
                            <button className="button primary"><a href="">Select Plan</a></button>
                        </td>
                        <td class="features__cell features__cell--bold features__cell--large"><span>$5,999</span>
                            <button className="button primary"><a href="">Select Plan</a></button>
                        </td>
                    </tr>
                    <tr className='head-rows'>
                        <td class="features__cell features__cell--bold features__cell--shaded color" >Features</td>
                        <td class="features__cell features__cell--bold features__cell--shaded color"></td>
                        <td class="features__cell features__cell--bold features__cell--shaded color" ></td>
                        <td class="features__cell features__cell--bold features__cell--shaded color" ></td>
                    </tr>
                    <tr className='data-rows'>
                        <td class="features__cell color">
                            Test Data
                        </td>
                        <td class="features__cell features__cell--center">
                            <span class="features__tick"></span>
                        </td>
                        <td class="features__cell features__cell--center">
                            <span class="features__tick"></span>
                        </td>
                        <td class="features__cell features__cell--center">
                            <span class="features__tick"></span>
                        </td>
                    </tr>
                    <tr className='data-rows'>
                        <td class="features__cell color">
                            Test Data
                        </td>
                        <td class="features__cell features__cell--center">
                            <span class="features__tick"></span>
                        </td>
                        <td class="features__cell features__cell--center">
                            <span class="features__tick"></span>
                        </td>
                        <td class="features__cell features__cell--center">
                            <span class="features__tick"></span>
                        </td>
                    </tr>
                    <tr className='data-rows'>
                        <td class="features__cell color">
                            Test Data
                        </td>
                        <td class="features__cell features__cell--center"> </td>
                        <td class="features__cell features__cell--center">
                            <span class="features__tick"></span>
                        </td>
                        <td class="features__cell features__cell--center">
                            <span class="features__tick"></span>
                        </td>
                    </tr>
                    <tr className='data-rows'>
                        <td class="features__cell color">
                            Test Data
                        </td>
                        <td class="features__cell features__cell--center">
                            Test Data    
                        </td>
                        <td class="features__cell features__cell--center">
                            Test Data
                        </td>
                        <td class="features__cell features__cell--center">
                            Test Data
                        </td>
                    </tr>
                    <tr className='data-rows'>
                        <td class="features__cell color">
                            Test Data
                           {/* <Example/> */}
                        </td>
                        <td class="features__cell features__cell--center"> </td>
                        <td class="features__cell features__cell--center">
                            <span class="features__tick"></span>
                        </td>
                        <td class="features__cell features__cell--center">
                            <span class="features__tick"></span>
                        </td>
                    </tr>
                    <tr className='data-rows'>
                        <td class="features__cell color">
                            Test Data
                        </td>
                        <td class="features__cell features__cell--center">

                        </td>
                        <td class="features__cell features__cell--center features__feature">
                            - Test Data <span class="features__small">
                                Test Data    
                            </span>
                        </td>
                        <td class="features__cell features__cell--center features__feature">
                            - Test Data <span class="features__small">
                                Test Data
                            </span>
                            - Test Data <span class="features__small ">
                                Test Data
                            </span>
                            - Test Data <span class="features__small">
                                Test Data
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default RootIndex

// import React from 'react'

// const priceTable = () => {
//   return (
//     <div id='prices' className='price_wrapper'>
//             <h2>Pricing</h2>
//         <div className="price_content">
//             <div className="single-price">
//                 <h1>Monthly</h1>
//                 <div className="price">
//                     <h3>$190</h3>
//                 </div>
//                 <div className="deals">
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                 </div>
//                 <a href="">Select Plan</a>
//             </div>

//             <div className="single-price">
//                 <h1>Annually</h1>
//                 <div className="price">
//                     <h3>$1,999</h3>
//                 </div>
//                 <div className="deals">
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                 </div>
//                 <a href="">Select Plan</a>
//             </div>

//             <div className="single-price">
//                 <h1>Life-Time</h1>
//                 <div className="price">
//                     <h3>$5,999</h3>
//                 </div>
//                 <div className="deals">
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                     <h4>Test data</h4>
//                 </div>
//                 <a href="">Select Plan</a>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default priceTable