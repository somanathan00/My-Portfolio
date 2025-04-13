import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react'
const Navbar = () => {
    const [menu, setMenu] = useState("home")
    const menuRef=useRef()
    const openMenu= ()=>{
        menuRef.current.style.right='0';
    }
    const closeMenu= ()=>{
        menuRef.current.style.right='-350px';
    }
    const handleMenuClick = (menuItem) => {
        setMenu(menuItem)
    }

    return (
        <div className='navbar'>
            <h1>Portfolio</h1>
            <img onClick={openMenu} src={menu_open} alt="" className='nav-mob-open'/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} alt=""  onClick={closeMenu} className='nav-mob-close'/>
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
                        <p className={menu === "portfolio" ? "active" : ""}>Projects</p>
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
