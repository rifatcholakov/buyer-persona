import React from 'react'

import styles from './index.module.css';

function Input({ label, type, id, name, placeholder }) {

    return (
        <div className={styles.formControlGroup}>
            <label className={styles.inputLabel} for={id}>{label}</label>
            <input className={styles.input} type={type} placeholder={placeholder} name={name} id={id} />
        </div>
    );
}

export default Input;
