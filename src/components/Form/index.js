import React from 'react'
import Input from '../Input';
import RadioButton from '../RadioButton';

import styles from './index.module.css';

function index() {
    return (
        <form>
            <div className={styles.formControlGroup}>
                <RadioButton
                    label="Male"
                    name="gender"
                    id="male"
                    value="male"
                />
                <RadioButton
                    label="Female"
                    name="gender"
                    id="female"
                    value="female"
                />
                <RadioButton
                    label="Other"
                    name="gender"
                    id="other"
                    value="other"
                />
            </div>
            <Input
                label="Name:"
                type="text"
                id="name"
                name="name"
                placeholder="Enter the name here"
            />
            <Input
                label="Age:"
                type="number"
                id="age"
                name="age"
                placeholder="Enter the age here"
            />
            <Input
                label="Location:"
                type="text"
                id="location"
                name="location"
                placeholder="Enter the location here"
            />
            <div className={styles.formControlGroup}>
                <label>Education:</label>
                <select name="education" id="education">
                    <option selected>Select</option>
                    <option value="king">
                        Less than a High School diploma
                    </option>
                    <option value="high-school">High School</option>
                    <option value="bachelor">Bachelor's degree</option>
                    <option value="master">Master's degree</option>
                    <option value="doctoral">Doctoral</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <Input
                label="Job title:"
                type="text"
                id="job-title"
                name="job-title"
                placeholder="Enter the job title here"
            />
            <div className={styles.formControlGroup}>
                <label for="organization-size">Size of the organization:</label>
                <select name="ogranization-size" id="organization-size">
                    <option selected>Select</option>
                    <option value="1-5">1-5</option>
                    <option value="5-10">5-10</option>
                    <option value="10-20">10-20</option>
                    <option value="20-50">20-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100+">100+</option>
                </select>
            </div>
            <div className={styles.formControlGroup}>
                <label for="marital-status">Marital status:</label>
                <select name="marital-status" id="marital-status">
                    <option>Select</option>
                    <option value="married">Married</option>
                    <option value="single">Single</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                    <option value="engaged">Engaged</option>
                    <option value="in-relationship">In a relationship</option>
                </select>
            </div>
        </form>
    );
}

export default index
