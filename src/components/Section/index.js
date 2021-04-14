import React from 'react'
import Icon from '../Icon';

import styles from './index.module.css';

function Section({ children, currentSection, sections, setSections }) {
    const handleInputChange = (event) => {
        const updatedSections = sections.map(section => {
            section.title === currentSection
                ? (section.content = event.target.value)
                : section.content = section.content

            return section;
        });
        setSections(updatedSections);

        if(children.length > 255) {

        }   
    }

    const handleRemoveSection = () => {
        const updatedSections = sections.filter(section => section.title !== currentSection)
        setSections(updatedSections);
    };

    return (
        <div className={styles.section}>
            <div className={`${styles.warning} ${children.length > 255 ? styles.active : ''}`}>
                <Icon>
                    <svg
                        width="22"
                        height="19"
                        viewBox="0 0 22 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.71875 7.45703L9.96484 11.3945C9.96484 11.6406 10.1406 11.7812 10.3867 11.7812H11.8281C12.0391 11.7812 12.25 11.6055 12.25 11.3945L12.4961 7.45703C12.4961 7.21094 12.3203 7 12.0742 7H10.1406C9.89453 7 9.71875 7.21094 9.71875 7.45703ZM12.6016 13.75C12.6016 12.9414 11.9336 12.2734 11.125 12.2734C10.2812 12.2734 9.64844 12.9414 9.64844 13.75C9.64844 14.5938 10.2812 15.2266 11.125 15.2266C11.9336 15.2266 12.6016 14.5938 12.6016 13.75ZM12.5664 1.09375C11.9336 0.00390625 10.2812 -0.03125 9.64844 1.09375L1.21094 15.7539C0.578125 16.8438 1.38672 18.25 2.6875 18.25H19.5273C20.8281 18.25 21.6367 16.8789 21.0039 15.7539L12.5664 1.09375ZM2.86328 16.2812L10.9141 2.28906C11.0195 2.14844 11.1953 2.14844 11.3008 2.28906L19.3516 16.2812C19.457 16.4219 19.3516 16.5625 19.1758 16.5625H3.03906C2.86328 16.5625 2.75781 16.4219 2.86328 16.2812Z"
                            fill="#B60B00"
                        />
                    </svg>
                </Icon>
            </div>
            <div className={styles.action} onClick={handleRemoveSection}>
                <Icon>
                    <svg
                        width="16"
                        height="19"
                        viewBox="0 0 16 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.42188 14.875H10.2656C10.4766 14.875 10.6875 14.6992 10.6875 14.4531V6.85938C10.6875 6.64844 10.4766 6.4375 10.2656 6.4375H9.42188C9.17578 6.4375 9 6.64844 9 6.85938V14.4531C9 14.6992 9.17578 14.875 9.42188 14.875ZM15.1875 3.0625H12.2695L11.0742 1.09375C10.793 0.636719 10.1602 0.25 9.63281 0.25H6.08203C5.55469 0.25 4.92188 0.636719 4.64062 1.09375L3.44531 3.0625H0.5625C0.246094 3.0625 0 3.34375 0 3.625V4.1875C0 4.50391 0.246094 4.75 0.5625 4.75H1.125V16.5625C1.125 17.5117 1.86328 18.25 2.8125 18.25H12.9375C13.8516 18.25 14.625 17.5117 14.625 16.5625V4.75H15.1875C15.4688 4.75 15.75 4.50391 15.75 4.1875V3.625C15.75 3.34375 15.4688 3.0625 15.1875 3.0625ZM6.01172 2.04297C6.04688 2.00781 6.15234 1.9375 6.1875 1.9375H6.22266H9.52734C9.5625 1.9375 9.66797 2.00781 9.70312 2.04297L10.3008 3.0625H5.41406L6.01172 2.04297ZM12.9375 16.5625H2.8125V4.75H12.9375V16.5625ZM5.48438 14.875H6.32812C6.53906 14.875 6.75 14.6992 6.75 14.4531V6.85938C6.75 6.64844 6.53906 6.4375 6.32812 6.4375H5.48438C5.23828 6.4375 5.0625 6.64844 5.0625 6.85938V14.4531C5.0625 14.6992 5.23828 14.875 5.48438 14.875Z"
                            fill="#C9C9C9"
                        />
                    </svg>
                </Icon>
            </div>
            <textarea
                placeholder="Enter the text here"
                className={styles.sectionInput}
                type="text"
                name="section-text"
                value={children}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default Section             
