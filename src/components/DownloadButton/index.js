import React from 'react'

import styles from './index.module.css'

function DownloadButton({ children, title }) {
    return (
        <div className={styles.button}>
            <span className={styles.icon}>{children}</span> {title}
        </div>
    );
}

export default DownloadButton
