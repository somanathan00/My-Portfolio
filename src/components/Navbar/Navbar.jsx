import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    const [menu, setMenu] = useState("home")

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem)
    }

    return (
        <div className='navbar'>
            <ul className="nav-menu">
                <li onClick={() => handleMenuClick("home")}>
                    <AnchorLink className='anchor-link' href='#home'>
                        <p className={menu === "home" ? "active" : ""}>Home</p>
                    </AnchorLink>
                </li>
                <li onClick={() => handleMenuClick("about")}>
                    <AnchorLink className='anchor-link' href='#about' offset={50}>
                        <p className={menu === "about" ? "active" : ""}>About</p>
                    </AnchorLink>
                </li>
                <li onClick={() => handleMenuClick("portfolio")}>
                    <AnchorLink className='anchor-link' href='#work' offset={50}>
                        <p className={menu === "portfolio" ? "active" : ""}>Portfolio</p>
                    </AnchorLink>
                </li>
                <li onClick={() => handleMenuClick("contact")}>
                    <AnchorLink className='anchor-link' href='#contact' offset={50}>
                        <p className={menu === "contact" ? "active" : ""}>Contact</p>
                    </AnchorLink>
                </li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' href='#contact' offset={50}>Connect with me</AnchorLink></div>
        </div>
    )
}

export default Navbar
