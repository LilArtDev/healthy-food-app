import styles from './Join.module.css'

import { Input, SubmitButton } from '../../../../form/index'
import Img from '../../../../../assets/bloco_final_image.svg'

function Join() {
    return (
        <section className={styles.join}>
            <div className={styles.text}>
                <h1>Join our membership to get special offer</h1>
                <form className={styles.form}>
                    <Input type="text" name="email" placeholder="Enter your email address" />
                    <SubmitButton customClass="shadow">Join</SubmitButton>
                </form>
            </div>
            <img className={styles.img} src={Img} alt="Presentation" />
        </section>
    )
}

export default Join;