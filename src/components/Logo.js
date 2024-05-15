import React from "react"
import logo from "../assets/images/logocimedi.png"
import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const Logo = () => {
    return(
        <Link to = "/">
            <Image src={ logo } roundedCircle style={{ width: '80px', height: '80px'}}/>
        </Link>
    )
}

export default Logo