import { useState } from 'react'
import styles from './Navbar.module.css'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { MdOutlineMenuOpen, MdOutlineClose } from 'react-icons/md'

function Navbar() {
    const isMobile = useMediaQuery({
        query: '(max-width: 748px)'
    })
    const [nav, setNav] = useState(false)
    const [home, setHome] = useState(true)
    const [showMenu, setShowMenu] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 20) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }



    function toggleShowMenu() {
        setShowMenu(!showMenu);
    }
    window.addEventListener('scroll', changeNav);
    window.onload = (event) => {
        if (window.location.pathname === "/" || window.location.pathname === "") {
            setHome(true)
        }
        else {
            setHome(false)
        }
    };
    return (
        <nav className={`${styles.nav} ${nav ? styles.alt : home ? "" : styles.alt}`}>
            <Fade left>
                <Link to="/">
                    <h2 className={styles.logo}>HealthyFood</h2>
                </Link>
            </Fade>
            <Fade right>
                <div className={isMobile ? styles.mobile_menu : styles.web_menu}>
                    <Fade right when={isMobile ? showMenu : true} collapse={isMobile}>
                        <ul className={styles.list}>
                            <Fade right>
                                <li>
                                    <a href="#" className={styles.item} onClick={() => { setShowMenu(false); }}>RECIPES</a>
                                </li>
                                <li>
                                    <a href="#" className={styles.item} onClick={() => { setShowMenu(false); }}>BLOG</a>
                                </li>
                                <li>
                                    <a href="#" className={styles.item} onClick={() => { setShowMenu(false); }}>JOIN</a>
                                </li>
                                <li>
                                    <Fade top>
                                        <Link to={home ? "/register" : "/"} className={styles.btn} onClick={() => { setShowMenu(false); setHome(!home) }}>{!home ? "HOME" : "REGISTER"}</Link>
                                    </Fade>
                                </li>
                            </Fade>
                        </ul>
                    </Fade>

                    {isMobile ? (
                        <div className={styles.menu_actions} onClick={toggleShowMenu}>
                            {!showMenu ? <MdOutlineMenuOpen className={styles.open} /> : <Fade right><MdOutlineClose className={styles.close} /></ Fade>}
                        </div>
                    ) : false}

                </div >
            </Fade >
        </nav >

    )
}

export default Navbar;