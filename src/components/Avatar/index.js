import React from 'react'

import styles from './index.module.css'

function Avatar({ children }) {
    return <div className={styles.avatarWrapper}>
        { children }
    </div>;
}

export default Avatar
