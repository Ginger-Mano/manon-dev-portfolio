import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className="footerDiv">
            <div className="footerAskDiv">
                <h4 className="footerAsk">Connect with me:</h4>
            </div>

            <div className="footMailDiv">
                <h4 className="footerEmail">manonsainton.dev@gmail.com</h4>
            </div>

            <div className="footerIconDiv">
                <a href="https://github.com/Ginger-Mano"><FontAwesomeIcon icon={faGithubSquare} size="3x" className="iconG" /></a>
                <a href="https://www.linkedin.com/in/manon-sainton-7830b01ab"><FontAwesomeIcon icon={faLinkedin} size="3x" className="iconL" /></a>

                <a href="https://mcasimirian.medium.com/"><FontAwesomeIcon icon={faMedium} size="3x" className="iconM" /></a>
                <a href="https://www.youtube.com/channel/UC7giI4VW75cI-_-uqY_aRoQ"><FontAwesomeIcon icon={faYoutube} size="3x" className="iconY" /></a>
            </div>
        </div>
    )
}
export default Footer

