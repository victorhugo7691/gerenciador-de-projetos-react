import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value }){
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
            type={text} 
            id={name} 
            name={name} 
            placeholder={placeholder} 
            onChange={handleOnChange}
            value={value}
            />
        </div>
    )
}
//handleOnChange para manusear os dados do input

export default Input;