import React from 'react'

import styles from './index.module.css';

function RadioButton({ label, id, name, value }) {
    return (
        <>
            <label className={`${styles.radio} ${styles.radioBefore}`}>
                <span className={styles.radioInput}>
                    <input
                        type="radio"
                        name={name}
                        value={value}
                        id={id}
                    />
                    <span className={styles.radioControl}></span>
                </span>
                <span className={styles.radioLabel}>{label}</span>
            </label>
        </>
    );
}

export default RadioButton
