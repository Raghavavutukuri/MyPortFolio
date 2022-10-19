import "./SacCardStyles.css"

import React from 'react'
import {FaBusinessTime, FaCertificate, FaLightbulb} from "react-icons/fa"

const SacCard = () => {
  return (
    <div className="sac">
        <div className="card-container">
            <div className="card">
                <h3><FaLightbulb size={25} style={{color:"#fff", marginRight: "1rem", marginLeft: "1rem"}}/></h3>
                <span className="bar"></span>
                <p className="btc">SKILLS</p>
                <p> C, java, pyhton, C++ </p>
                <p> Html, Css, Js, React Js </p>
                <p> Android, Flutter </p>
                <p> Aws </p>
            </div>

            <div className="card">
                <h3><FaCertificate size={25} style={{color:"#fff", marginRight: "1rem", marginLeft: "1rem"}}/></h3>
                <span className="bar"></span>
                <p className="btc">CERTIFICATIONS</p>
                <p> C++ </p>
                <p> Python </p>
                <p> Programming DSA </p>
                <p> Ethical Hacking </p>
            </div>

            <div className="card">
                <h3><FaBusinessTime size={25} style={{color:"#fff", marginRight: "1rem", marginLeft: "1rem"}}/></h3>
                <span className="bar"></span>
                <p className="btc">EXPERIENCE</p>
                <p> Member of CSI </p>
                <p> Incharge for Vignan Innovators club </p>
                <p> Treasure for Vignan Cse department </p>
                <p> Pioneer of Young Generation NGO </p>
            </div>
        </div>
    </div>
  )
}

export default SacCard