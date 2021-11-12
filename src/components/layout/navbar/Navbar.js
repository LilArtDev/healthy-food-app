import { useState } from 'react'
import styles from './Navbar.module.css'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom'
import Fade from 'react-reveal'
import { MdOutlineMenuOpen, MdOutlineClose } from 'react-icons/md'

function Navbar() {
    const isMobile = useMediaQuery({
        query: '(max-width: 610px)'
    })

    const [showMenu, setShowMenu] = useState(false);

    function toggleShowMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <nav className={styles.nav}>
            <Fade left>
                <h2 className={styles.logo}>HealthyFood</h2>
            </Fade>
            <Fade right>
                <div className={isMobile ? styles.mobile_menu : styles.web_menu}>

                    <ul className={!isMobile ? styles.list_show : showMenu ? styles.list_show : styles.list_hide}>
                        <li>
                            <a href="#" className={styles.item}>Recipes</a>
                            {/* <Link to="/">Recipes</Link> */}
                        </li>
                        <li>
                            <a href="#" className={styles.item}> Blog</a>
                            {/* <Link to="/">Blog</Link> */}
                        </li>
                        <li>
                            <a href="#" className={styles.item}> Join</a>
                            {/* <Link to="/">Join</Link> */}
                        </li>
                        <li>
                            <a href="#" className={styles.btn}>Registre-se</a>
                            {/* <Link to="/">Registre-Se</Link> */}
                        </li>
                    </ul>

                    {isMobile ? (
                        <div className={styles.menu_actions} onClick={toggleShowMenu}>
                            {!showMenu ? <MdOutlineMenuOpen className={styles.open} /> : <Fade right><MdOutlineClose className={styles.close} /></ Fade>}
                        </div>
                    ) : false}

                </div >
            </Fade>
        </nav >

    )
}

export default Navbar;