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

    const navTest = true


    const [showMenu, setShowMenu] = useState(false);

    function toggleShowMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <nav className={!navTest ? styles.nav : styles.nav_alt}>
            <Fade left>
                <h2 className={styles.logo}>HealthyFood</h2>
            </Fade>
            <Fade right>
                <div className={isMobile ? styles.mobile_menu : styles.web_menu}>
                    <Fade right when={isMobile ? showMenu : true} collapse={isMobile}>
                        <ul className={styles.list}>
                            <Fade right>
                                <li>
                                    <a href="#" className={styles.item} onClick={() => { setShowMenu(false) }}>Recipes</a>
                                    {/* <Link to="/">Recipes</Link> */}
                                </li>
                                <li>
                                    <a href="#" className={styles.item} onClick={() => { setShowMenu(false) }}> Blog</a>
                                    {/* <Link to="/">Blog</Link> */}
                                </li>
                                <li>
                                    <a href="#" className={styles.item} onClick={() => { setShowMenu(false) }}> Join</a>
                                    {/* <Link to="/">Join</Link> */}
                                </li>
                                <li>
                                    <a href="#" className={styles.btn} onClick={() => { setShowMenu(false) }}>Register</a>
                                    {/* <Link to="/">Registre-Se</Link> */}
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