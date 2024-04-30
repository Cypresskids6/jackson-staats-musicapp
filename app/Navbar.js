'use client'
import styles from './styles.css'

export default function Navbar(){ //navbar componit 
    return(
        <div className="navbar">
            <img src="jackedoo612.png" alt="logo" className="nav-logo"></img>
            <h1 className="nav-title">Dj jackedoo612s music</h1>
            <a onClick={() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth"
                })
             }} className="nav-link">More info</a>
        </div>
        )
}