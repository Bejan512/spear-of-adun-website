import React from "react"
import "./MainContent.css"

function MainContent() {
    return (
        <div className="main-content">
            <div className="vignette">
            </div>
            <video className="home-video" poster="https://cnet1.cbsistatic.com/img/XoJ8eefk48pSfEdbzxgZkV42F5g=/940x0/2017/04/18/f218228e-d98c-41aa-8491-9ef3849d4b9d/starcraft-original-box.jpg" autoPlay="autoplay" muted loop playsinline="true" disablePictureInPicture="true">
                <source src="../../public/../Videos/dragoons.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default MainContent