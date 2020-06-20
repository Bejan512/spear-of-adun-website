import React from "react"
import "./Footer.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import {Link} from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            <Link className="link" to="/about">
                <p className="footer-item">
                    AI Showcase
                    <FaLongArrowAltRight />
                </p>
            </Link>
        </div>
    )
}

export default Footer