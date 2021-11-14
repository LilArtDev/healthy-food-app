import styles from '../layout/button/Button.module.css'

function SubmitButton(props) {
    return (
        <div>
            <input type="submit" className={`${styles.btn} ${styles[props.customClass]}`} />
        </div>
    )
}

export default SubmitButton;