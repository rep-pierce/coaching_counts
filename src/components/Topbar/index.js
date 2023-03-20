import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import './index.scss'
import LogoC from "../../assets/images/coachinglogocrop.png"
import LogoSub from "../../assets/images/coachlogosubcrop.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Topbar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoC} alt='logo' />
            <img className='sub-logo' src={LogoSub} alt="Coaching Counts" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ryan-pierce97/'>
                    <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCK_qy-y7pkYPbbYIeR_TYVA'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Topbar