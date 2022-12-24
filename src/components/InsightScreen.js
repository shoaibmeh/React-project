import React from 'react'
import tick from '../img/tick.png'
function InsightScreen() {
    return (
        <div className='main-container'>
            <div className='main'>
                <div className='quality-btn'>
                    <p> Quality</p>
                </div>
                <div className='performance-btn'>
                    <p> Performance</p>
                </div>
            </div>

            <div className=''>
                <input placeholder='Search Vendor/ Rider' className='input' />

            </div>
            {/* --------company insights Section------------ */}
            <div>
                <h2 className='insight-heading'>Company Insights</h2>
            </div>

            <div className='box'>
                <div className='box1'>
                    <img src={tick} alt='' className='tick-icon' />
                    <p>Order Acceptance</p>
                    <p className='percent'>85%</p>
                    <button className='btn-1'>Phase 1 Goal</button>
                </div>
                <div className='box1'style={{marginLeft: "6%"}}>
                    <img src={tick} alt='' className='tick-icon' />
                    <p>Reaching Vendor</p>
                    <p className='percent'>95%</p>
                    <button className='btn-2'>Phase 2 Goal</button>
                </div>
                <div className='box1'style={{marginLeft: "6%"}}>
                    <img src={tick} alt='' className='tick-icon' />
                    <p>Delivery Order</p>
                    <p className='percent'>99%</p>
                    <button className='btn-3'>Ultimate Goal</button>
                </div>
                
            </div>
            <div className='box'>
                <div className='box1'>
                    <img src={tick} alt='' className='tick-icon' />
                    <p>Clearing Payments</p>
                    <p className='percent'>65%</p>
                    <button className='btn-4'>None</button>
                </div>
                <div className='box1' style={{marginLeft: "6%"}}>
                    <img src={tick} alt='' className='tick-icon' />
                    <p>Total Quality Score</p>
                    <p className='percent'>75%</p>
                    <button className='btn-5'>Phase 1 Goal</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default InsightScreen