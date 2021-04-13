import React from 'react'

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
    }

    return (
        <div>
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
