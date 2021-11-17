import styles from './Footer.module.css'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.copyright}>© Copyrights 2019 Stack. All Rights Reserved.</p>
            <div className={styles.links}>
                <Link className={styles.link} to="/">Privacy Policy</Link>
                <Link className={styles.link} to="/">Terms and Conditions</Link>
            </div>
        </div>
    )
}

export default Footer;