import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithubSquare, faLinkedin, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons'


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
                <a href="https://github.com/Ginger-Mano"><FontAwesomeIcon icon={faGithubSquare} size="5x" className="iconG" /></a>
                <FontAwesomeIcon icon={faLinkedin} size="5x" className="iconL" />

                <FontAwesomeIcon icon={faMedium} size="5x" className="iconM" />
                <FontAwesomeIcon icon={faYoutube} size="5x" className="iconY" />
            </div>
        </div>
    )
}
export default Footer

