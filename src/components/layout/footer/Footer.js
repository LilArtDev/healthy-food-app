import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
            <div className={styles.links}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </div>
        </div>
    )
}

export default Footer;