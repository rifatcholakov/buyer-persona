import React from 'react'

import styles from './index.module.css'

function FormGroup({ children }) {
    return <div className={styles.formGroup}>{ children }</div>;
}

export default FormGroup
