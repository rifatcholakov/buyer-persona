import React from 'react'

import styles from './index.module.css'

function SocialIcon({ children }) {
    return (
        <div className={`${styles.iconWrapper}`}>
            <span className={styles.icon}>{children}</span>
        </div>
    );
}

export default SocialIcon
