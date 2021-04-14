import React from 'react'
import Icon from '../Icon';

import styles from './index.module.css'

function Persona({ index, setAvatarIndex }) {
    const handleClick = () => {
        setAvatarIndex(index);
    };

    return (
        <div className={styles.avatarWrapper}>
            <img src={`/images/avatar-${index}.svg`} />
            <div className={styles.iconWrapper} onClick={handleClick}>
                <Icon>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.9375 6.125H7.875V1.0625C7.875 0.78125 7.59375 0.5 7.3125 0.5H6.1875C5.87109 0.5 5.625 0.78125 5.625 1.0625V6.125H0.5625C0.246094 6.125 0 6.40625 0 6.6875V7.8125C0 8.12891 0.246094 8.375 0.5625 8.375H5.625V13.4375C5.625 13.7539 5.87109 14 6.1875 14H7.3125C7.59375 14 7.875 13.7539 7.875 13.4375V8.375H12.9375C13.2188 8.375 13.5 8.12891 13.5 7.8125V6.6875C13.5 6.40625 13.2188 6.125 12.9375 6.125Z"
                            fill="#DDDDDD"
                        />
                    </svg>
                </Icon>
            </div>
        </div>
    );
}

export default Persona
