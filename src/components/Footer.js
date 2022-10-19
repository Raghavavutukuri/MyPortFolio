import "./FooterStyles.css"

import React from 'react'

import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Nehru Nagar 2nd line, Guntur.</p>
                        <p>Andhra Pradesh.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        +91 8125527279
                    </h4>
                </div> 
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        harshithvutukuri@gmail.com
                    </h4>
                </div> 
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>This is Raghava Vutukuri. Student at Vignan University. I am from Computer Science background. I enjoy to learn new technologies</p>
                <div className="social">
                <a href="https://www.facebook.com/raghava.vutukuri.7" target="_blank"><FaFacebook size={20} style={{color:"#fff", marginRight: "1rem"}}/></a>
                <a href="https://twitter.com/Raghvavutukuri1" target="_blank"><FaTwitter size={20} style={{color:"#fff", marginRight: "1rem"}}/></a>
                <a href="https://www.linkedin.com/in/harshith-venkataraghava-vutukuri/ " target="_blank"><FaLinkedin size={20} style={{color:"#fff", marginRight: "1rem"}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer