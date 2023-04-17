import React, { useEffect, useState } from 'react'
import './navbar.css';
const Navbar = () => {
    const [show, setShowFlag] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', smoothScrollFunctionality)

        return () =>{
            window.removeEventListener('scroll', smoothScrollFunctionality)
        }
    }, [])
    const smoothScrollFunctionality = () => {
        if (window.scrollY > 100) {
            setShowFlag(false);
        } else {
            setShowFlag(true)
        }
    }

    return (
        <div className={`nav__bar ${show && 'nav__black'}`}>
            <div className='nav__bar_content'>
                <div>
                    <img className='nav__bar_logo' src='https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png' />
                </div>
                <div>
                    <img className='nav__bar_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
                </div>
            </div>
        </div>
    )
}

export default Navbar