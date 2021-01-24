import React from "react"
import "./MainContent.css"

function MainContent() {
    return (
        <div className="main-content">
            <div className="vignette">
            </div>
            <video className="home-video" autoPlay="autoplay" muted loop playsinline="true" disablePictureInPicture="true">
                <source src="../../public/../Videos/dragoons.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default MainContent