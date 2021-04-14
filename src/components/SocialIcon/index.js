import React from 'react'

import styles from './index.module.css'

function SocialIcon({ name, children, active, setSocialMedia }) {
    const handleClick = () => {

        setSocialMedia((prevState) => {
            return { ...prevState, [name]: !active};
        });
    };

    return (
        <div
            onClick={handleClick}
            className={`${styles.iconWrapper} ${active ? styles.active : ''}`}
        >
            <span className={styles.icon}>{children}</span>
        </div>
    );
}

export default SocialIcon
