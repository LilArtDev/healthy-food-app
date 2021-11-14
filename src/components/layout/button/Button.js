import styles from './Button.module.css'

function Button(props) {

    return (
        <div>
            <button className={`${styles.btn} ${styles[props.customClass]}`}>{props.children}</button>
        </div>
    )
}

export default Button;