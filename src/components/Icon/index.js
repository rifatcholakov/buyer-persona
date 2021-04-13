import React from 'react'

import styles from './index.module.css'

function Icon({ children }) {
    return (
        <div className={styles.iconWrapper}>
            { children }
        </div>
    )
}

export default Icon
