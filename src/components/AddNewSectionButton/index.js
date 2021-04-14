import React, { useState } from 'react'
import Icon from '../Icon'

import styles from './index.module.css'

function AddNewSectionButton({ onAddNewSection, sections }) {
    const [title, setTitle] = useState('');

    const handleChange = (element) => {
        setTitle(element.target.value);
    }

    const handleClick = () => {
        onAddNewSection([...sections, { title: title, content: '' }])
        setTitle('');
    }

    return (
        <div className={styles.newSectionWrapper}>
            <input
                className={styles.title}
                type="text"
                placeholder="Add title here:"
                value={title}
                onChange={handleChange}
            />
            <div className={styles.section} onClick={handleClick}>
                <Icon>
                    <svg
                        width="33"
                        height="34"
                        viewBox="0 0 33 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M32.75 17C32.75 15.9844 31.8906 15.125 30.875 15.125H18.375V2.625C18.375 1.60938 17.5156 0.75 16.5 0.75C15.4062 0.75 14.625 1.60938 14.625 2.625V15.125H2.125C1.03125 15.125 0.25 15.9844 0.25 17C0.25 18.0938 1.03125 18.875 2.125 18.875H14.625V31.375C14.625 32.4688 15.4062 33.25 16.5 33.25C17.5156 33.25 18.375 32.4688 18.375 31.375V18.875H30.875C31.8906 18.875 32.75 18.0938 32.75 17Z"
                            fill="#418628"
                        />
                    </svg>
                </Icon>
                <p className={styles.buttonText}>Add New Section</p>
            </div>
        </div>
    );
}

export default AddNewSectionButton
