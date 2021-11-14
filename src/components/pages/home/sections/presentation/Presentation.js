import styles from './Presentation.module.css'

import { Input, SubmitButton } from '../../../../form/index'
import { MdOutlineSearch } from 'react-icons/md'
import Img from '../../../../../assets/Illustration.svg'

function Presentation() {
    return (
        <section className={styles.presentation}>
            <div className={styles.text}>
                <h1 className={styles.title}>Ready for Trying a new recipe?</h1>
                <form className={styles.form}>
                    <Input type="text" name="search" placeholder="Search healthy recipes" />
                    <SubmitButton><MdOutlineSearch /></SubmitButton>
                </form>
            </div>
            <img className={styles.img} src={Img} alt="Presentation" />
        </section>
    )
}

export default Presentation;