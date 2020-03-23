import React from "react"
import "./Footer.css"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            <Link className="link" to="/about">
                <p className="footer-item">AI Showcase</p>
            </Link>
            <Link className="link" to="/creator">
                <p className="footer-item">Creator's Corner</p>
            </Link>
        </div>
    )
}

export default Footer