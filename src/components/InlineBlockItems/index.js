import React from 'react'

import styles from './index.module.css'

function InlineBlockItems({ children }) {
    return <div className={styles.inlineBlock}>{children}</div>;
}

export default InlineBlockItems
