import React from 'react'

import styles from './index.module.css'

function Label({title, children}) {
    return (
        <label>
            <span className={styles.title}>{title}</span>
            {children}
        </label>
    );
}

export default Label
