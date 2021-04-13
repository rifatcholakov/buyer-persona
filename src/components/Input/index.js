import React, { useState } from 'react'

import styles from './index.module.css'

function Input({type, id, name, placeholder, value, onInputChange, checked }) {

    const handleChange = (event) => {
        const inputValue = event.target.value
        onInputChange(inputValue)
    }

    if(type === 'radio') {
        return (
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                onChange={handleChange}
                checked={checked}
            />
        );
    }

    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
            onChange={handleChange}
        />
    );
}

export default Input
