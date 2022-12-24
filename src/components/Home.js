import React from 'react'
import { Link } from 'react-router-dom'
import mask from '../img/Mask.svg'
import icon from '../img/Icon.svg'
import image1 from '../img/Image-1.png'
import image2 from '../img/Image-2.png'
import image3 from '../img/Image.png'
import orders from '../img/Orders.png'
import { useState } from 'react'
import { useEffect } from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const graphdata = [
    {
        name: "Jan",
        uv: 300,
        pv: 7400,
        amt: 900
    },
    {
        name: "feb",
        uv: 200,
        pv: 1398,
        amt: 2210
    },
    {
        name: "March",
        uv: 250,
        pv: 9800,
        amt: 2290
    },
    {
        name: "April",
        uv: 120,
        pv: 3908,
        amt: 2000
    },
];
function Home() {
    const [data, getData] = useState([]);
    const URL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(URL)
            .then((res) => res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            });
    };

    return (
        <div className='wraper'>
            <div className='section-1'>
                <div>
                    <button className='filter-btn'> Filter By</button>
                </div>
                <div>
                    <Link to="/InsightScreen">
                        <button className='tqm-btn' >TQM</button>
                    </Link>
                </div>
            </div>

            {/* ---------Section 2 Code--------------- */}

            <div className='section-2'>
                <div className='section-2-left'>
                    <div className='section-2-left-1'>
                        <div className='section-2-box'>
                            <img src={mask} alt='' className='' style={{ marginTop: "16%" }} />
                            <p className='section-2-box-text'>COSTOMERS</p>
                            <p className='section-2-box-amount'>7340</p>
                        </div>

                        <div className='section-2-box'>
                            <img src={mask} alt='' className='' style={{ marginTop: "16%" }} />
                            <p className='section-2-box-text'>ORDERS</p>
                            <p className='section-2-box-amount'>12907</p>
                        </div>

                        <div className='section-2-box'>
                            <img src={icon} alt='' className='' style={{ marginTop: "16%" }} />
                            <p className='section-2-box-text'>DELIVERY</p>
                            <p className='section-2-box-amount'>12907</p>
                        </div>

                        <div className='section-2-box'>
                            <img src={mask} alt='' className='' style={{ marginTop: "16%" }} />
                            <p className='section-2-box-text'>USERS</p>
                            <p className='section-2-box-amount'>7340</p>
                        </div>
                    </div>

                    <div className='section-2-left-2'>
                        <div className='section-2-box'>
                            <img src={icon} alt='' className='' style={{ marginTop: "16%" }} />
                            <p className='section-2-box-text'>COSTOMERS</p>
                            <p className='section-2-box-amount'>7340</p>
                        </div>

                        <div className='section-2-box'>
                            <img src={mask} alt='' className='' style={{ marginTop: "16%" }} />
                            <p className='section-2-box-text'>ORDERS</p>
                            <p className='section-2-box-amount'>12907</p>
                        </div>

                        <div className='section-2-box'>
                            <img src={icon} alt='' className='' style={{ marginTop: "16%" }} />
                            <p className='section-2-box-text'>DELIVERY</p>
                            <p className='section-2-box-amount'>12907</p>
                        </div>

                        <div className='section-2-box'>
                            <img src={icon} alt='' className='' style={{ marginTop: "16%" }} />
                            <p className='section-2-box-text'>USERS</p>
                            <p className='section-2-box-amount'>7340</p>
                        </div>
                    </div>
                </div>

                {/* Graph Code */}

                <div className='section-2-right'>
                    <AreaChart
                        width={610}
                        height={400}
                        data={graphdata}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#6DBCDB" fill="#6DBCDB" />
                    </AreaChart>
                </div>
            </div>

            {/* -----------Section-3 Code------------- */}

            <div className='section-3'>
                <div className='section-3-one'>
                    <p className='top-left-btn'>Top Costomer</p>
                    <div className='section-3-a'>
                        <div className='a'>
                            <div className='a1'>
                                <img src={image1} alt='' className='image1' />
                            </div>
                            <div className='a2'>
                                <p>Cristine</p>
                                <p>Ambrosia</p>
                            </div>
                        </div>
                        <div className='b'>
                            <p>$ 49,137</p>
                        </div>
                    </div>
                    <div className='section-3-b'>
                        <div className='c'>
                            <p className='c1'>REVENUE / MONTH</p>
                            <p className='c2'>$ 13469.80</p>
                        </div>
                        <div className='d'>
                            <p className='c1'>PROCESSED ORDERS / MONTH</p>
                            <p className='c2'>182</p>
                        </div>
                    </div>
                </div>

                <div className='section-3-one'>
                    <p className='top-left-btn'>Top Costomer</p>
                    <div className='section-3-a'>
                        <div className='a'>
                            <div className='a1'>
                                <img src={image3} alt='' className='image1' />
                            </div>
                            <div className='a2'>
                                <p>Alex</p>
                                <p>Williams</p>
                            </div>
                        </div>
                        <div className='b'>
                            <p>$ 49,137</p>
                        </div>
                    </div>
                    <div className='section-3-b'>
                        <div className='c'>
                            <p className='c1'>REVENUE / MONTH</p>
                            <p className='c2'>$ 13469.80</p>
                        </div>
                        <div className='d'>
                            <p className='c1'>PROCESSED ORDERS / MONTH</p>
                            <p className='c2'>182</p>
                        </div>
                    </div>
                </div>

                <div className='section-3-one'>
                    <p className='top-left-btn'>Top Costomer</p>
                    <div className='section-3-a'>
                        <div className='a'>
                            <div className='a1'>
                                <img src={image2} alt='' className='image1' />
                            </div>
                            <div className='a2'>
                                <p>Desi</p>
                                <p>Accent</p>
                            </div>
                        </div>
                        <div className='b'>
                            <p>$ 49,137</p>
                        </div>
                    </div>
                    <div className='section-3-b'>
                        <div className='c'>
                            <p className='c1'>REVENUE / MONTH</p>
                            <p className='c2'>$ 13469.80</p>
                        </div>
                        <div className='d'>
                            <p className='c1'>PROCESSED ORDERS / MONTH</p>
                            <p className='c2'>182</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------section-4 Code---------------- */}
            <div>
                <img src={orders} alt='' className='active-orders' />
            </div>
            <div className='active-orders'>
                <tbody>
                    <tr className='table-row'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Usernname</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Zipcode</th>

                    </tr>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{`${item.address.street},${item.address.city}`}</td>
                            <td>{`${item.address.zipcode}`}</td>
                        </tr>
                    ))}
                </tbody>
            </div>
        </div>

    )
}

export default Home