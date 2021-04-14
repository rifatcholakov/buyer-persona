import React, { useState } from 'react'
import Section from '../Section';
import Label from '../Label';
import AddNewSectionButton from '../AddNewSectionButton';

import styles from './index.module.css'

function Sections() {
    const [sections, setSections] = useState([
        { title: 'Goals and challenges:', content: '' },
        { title: 'Values and fears:', content: '' },
        { title: 'Negative Info:', content: '' },
        { title: 'Motivation:', content: '' },
        { title: 'Personality:', content: '' },
        { title: 'Technology:', content: '' }
    ]);

    return (
            <div className={styles.sections}>
                {sections.map(section => (
                    <div key={section.title} className={styles.sectionWrapper}>
                        <Label className={styles.section} title={section.title}>
                            <Section
                                currentSection={section.title}
                                sections={sections}
                                setSections={setSections}
                            >
                                {section.content}
                            </Section>
                        </Label>
                    </div>
                ))}
                <div className={styles.sectionWrapper}>
                    <AddNewSectionButton
                        sections={sections}
                        onAddNewSection={setSections}
                    />
                </div>
            </div>
    );
}

export default Sections
