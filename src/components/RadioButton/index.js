import React from 'react'
import Input from '../Input';

import styles from './index.module.css';

function RadioButton({ label, name, value, checked, onRadioChange }) {
    return (
        <>
            <label className={`${styles.radio} ${styles.radioBefore}`}>
                <span className={styles.radioInput}>
                    <Input
                        type="radio"
                        name={name}
                        value={value}
                        checked={value.toLowerCase() === checked.toLowerCase()}
                        onInputChange={onRadioChange}
                    />

                    <span className={styles.radioControl}></span>
                </span>
                <span className={styles.radioLabel}>{label}</span>
            </label>
        </>
    );
}

export default RadioButton
