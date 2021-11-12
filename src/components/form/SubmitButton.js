import styles from './SubmitButton.module.css'

function SubmitButton(props) {
    return (
        <div>
            <button className={styles.btn}>{props.children}</button>
        </div>
    )
}

export default SubmitButton;