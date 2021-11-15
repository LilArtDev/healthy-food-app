import styles from '../layout/button/Button.module.css'

function SubmitButton(props) {
    return (
        <div>
            <button onClick={props.handleOnClick} className={`${styles.btn} ${styles[props.customClass]}`}>{props.children}</button>
        </div>
    )
}

export default SubmitButton;