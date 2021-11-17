import styles from './Input.module.css'

function Input({ className, customClass, type, name, placeholder, value, handleOnChange, handleRef, handleOnBlur, disabled }) {
    return (
        <div className={styles.form_control} >
            <input className={`${styles[className]} ${styles[customClass]}`} type={type} name={name} value={value} id={name} placeholder={placeholder} onChange={handleOnChange} disabled={disabled} {...handleRef} onBlur={handleOnBlur} />
        </div>
    )
}

export default Input;