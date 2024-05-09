import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuDownload } from "react-icons/lu";
import CardImg from '../../../assets/card_img.jpg'

const Tracks = () => {
    return (
        <div className='outer_track' >
            <div className="page_width">
                <div className="track_div1">
                    <div className="top_content">
                    <p>Explore Programs</p>
                        <h2>Our Most Popular Class</h2>
                        <div className='detail'>
                            <p sty>Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
                        </div>
                    </div>
                    <div className="track_cards">
                        <div className="">
                            <div className="cards">
                            <div className="icons">
                                    <div className="icon_item">
                                        <span> <CiClock2 color='#000000' size={18} /> 22hr 30min </span>
                                    </div>
                                </div>
                                <div className="img">
                                    <img src={CardImg} alt="" />
                                </div>
                                <div className="rating">
                                    <small>UI/UX Design</small>
                                    <div className="stars">
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaStar className='full_icon' />
                                        <FaRegStar className='full_icon' />
                                    </div>
                                </div>
                                <div className="main_heading">
                                    <h2>UI/UX Design for Beginners</h2>
                                    <h3>$98</h3>
                                </div>
                                <hr />
                                <div className="icons">
                                    <div className="icon_item">
                                        <span> <CiClock2 color='#000000' size={18} /> 22hr 30min </span>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <button>Join Course</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tracks