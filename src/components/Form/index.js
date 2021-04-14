import React, { useState } from 'react'
import Input from '../Input';
import RadioButton from '../RadioButton';
import Label from '../Label';
import FormGroup from '../FormGroup';
import Select from '../Select';
import Avatar from '../Avatar'

import styles from './index.module.css';
import SocialIcon from '../SocialIcon';
import InlineBlockItems from '../InlineBlockItems';

function Form({ avatarIndex }) {
    const [gender, setGender] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [location, setLocation] = useState('')
    const [education, setEducation] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [organizationSize, setOrganizationSize] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [socialMedia, setSocialMedia] = useState({
        facebook: false,
        twitter: false,
        linkedin: false,
        instagram: false,
        snapchat: false
    });

    return (
        <form>
            <FormGroup>
                <Avatar>
                    <img
                        src={`/images/avatar-${avatarIndex}.svg`}
                        alt="avatar"
                    />
                </Avatar>
            </FormGroup>
            <FormGroup>
                <Label title="Gender:">
                    <RadioButton
                        label="Male"
                        name="gender"
                        id="male"
                        value="male"
                        checked={gender}
                        onRadioChange={setGender}
                    />
                    <RadioButton
                        label="Female"
                        name="gender"
                        id="female"
                        value="female"
                        checked={gender}
                        onRadioChange={setGender}
                    />
                    <RadioButton
                        label="Other"
                        name="gender"
                        id="other"
                        value="other"
                        checked={gender}
                        onRadioChange={setGender}
                    />
                </Label>
            </FormGroup>
            <FormGroup></FormGroup>
            <FormGroup>
                <Label title="Name:">
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter the name here"
                        value={name}
                        onInputChange={setName}
                    />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label title="Age:">
                    <Input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="Enter the age here"
                        value={age}
                        onInputChange={setAge}
                    />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label title="Location:">
                    <Input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter the location here"
                        value={location}
                        onInputChange={setLocation}
                    />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label title="Education:">
                    <Select
                        placeholder="Select"
                        items={[
                            'Less than a High School diploma',
                            'High School',
                            "Bachelor's degree",
                            "Master's degree",
                            'Doctoral',
                            'Other'
                        ]}
                        value={education}
                        onSelectClick={setEducation}
                    />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label title="Job title:">
                    <Input
                        type="text"
                        id="job-title"
                        name="job-title"
                        placeholder="Enter the job title here"
                        value={jobTitle}
                        onInputChange={setJobTitle}
                    />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label title="Size of the organization:">
                    <Select
                        placeholder="Select"
                        items={[
                            '1-5',
                            '5-10',
                            '10-20',
                            '20-50',
                            '50-100',
                            '100+'
                        ]}
                        value={organizationSize}
                        onSelectClick={setOrganizationSize}
                    />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label title="Marital status:">
                    <Select
                        placeholder="Select"
                        items={[
                            'Married',
                            'Single',
                            'Divorced',
                            'Widowed',
                            'Engaged',
                            'In a relationship'
                        ]}
                        value={maritalStatus}
                        onSelectClick={setMaritalStatus}
                    />
                </Label>
            </FormGroup>
            <FormGroup>
                <Label title="Social media:">
                    <InlineBlockItems>
                        <SocialIcon
                            name="facebook"
                            setSocialMedia={setSocialMedia}
                            active={socialMedia.facebook}
                        >
                            <svg
                                width="10"
                                height="19"
                                viewBox="0 0 10 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.18359 10.375L9.67578 7.14062H6.54688V5.03125C6.54688 4.11719 6.96875 3.27344 8.375 3.27344H9.81641V0.496094C9.81641 0.496094 8.51562 0.25 7.28516 0.25C4.71875 0.25 3.03125 1.83203 3.03125 4.64453V7.14062H0.148438V10.375H3.03125V18.25H6.54688V10.375H9.18359Z"
                                    fill="white"
                                />
                            </svg>
                        </SocialIcon>
                        <SocialIcon
                            name="twitter"
                            setSocialMedia={setSocialMedia}
                            active={socialMedia.twitter}
                        >
                            <svg
                                width="18"
                                height="16"
                                viewBox="0 0 18 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.1367 4.59375C16.8398 4.06641 17.4727 3.43359 17.9648 2.69531C17.332 2.97656 16.5938 3.1875 15.8555 3.25781C16.6289 2.80078 17.1914 2.09766 17.4727 1.21875C16.7695 1.64062 15.9609 1.95703 15.1523 2.13281C14.4492 1.39453 13.5 0.972656 12.4453 0.972656C10.4062 0.972656 8.75391 2.625 8.75391 4.66406C8.75391 4.94531 8.78906 5.22656 8.85938 5.50781C5.80078 5.33203 3.05859 3.85547 1.23047 1.64062C0.914062 2.16797 0.738281 2.80078 0.738281 3.50391C0.738281 4.76953 1.37109 5.89453 2.39062 6.5625C1.79297 6.52734 1.19531 6.38672 0.703125 6.10547V6.14062C0.703125 7.93359 1.96875 9.41016 3.65625 9.76172C3.375 9.83203 3.02344 9.90234 2.70703 9.90234C2.46094 9.90234 2.25 9.86719 2.00391 9.83203C2.46094 11.3086 3.83203 12.3633 5.44922 12.3984C4.18359 13.3828 2.60156 13.9805 0.878906 13.9805C0.5625 13.9805 0.28125 13.9453 0 13.9102C1.61719 14.9648 3.55078 15.5625 5.66016 15.5625C12.4453 15.5625 16.1367 9.97266 16.1367 5.08594C16.1367 4.91016 16.1367 4.76953 16.1367 4.59375Z"
                                    fill="#848484"
                                />
                            </svg>
                        </SocialIcon>
                        <SocialIcon
                            name="linkedin"
                            setSocialMedia={setSocialMedia}
                            active={socialMedia.linkedin}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.64062 16V5.48828H0.371094V16H3.64062ZM1.98828 4.08203C3.04297 4.08203 3.88672 3.20312 3.88672 2.14844C3.88672 1.12891 3.04297 0.285156 1.98828 0.285156C0.96875 0.285156 0.125 1.12891 0.125 2.14844C0.125 3.20312 0.96875 4.08203 1.98828 4.08203ZM15.8398 16H15.875V10.2344C15.875 7.42188 15.2422 5.24219 11.9375 5.24219C10.3555 5.24219 9.30078 6.12109 8.84375 6.92969H8.80859V5.48828H5.67969V16H8.94922V10.7969C8.94922 9.42578 9.19531 8.125 10.8828 8.125C12.5703 8.125 12.6055 9.67188 12.6055 10.9023V16H15.8398Z"
                                    fill="#848484"
                                />
                            </svg>
                        </SocialIcon>
                        <SocialIcon
                            name="instagram"
                            setSocialMedia={setSocialMedia}
                            active={socialMedia.instagram}
                        >
                            <svg
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 4.20703C5.75 4.20703 3.95703 6.03516 3.95703 8.25C3.95703 10.5 5.75 12.293 8 12.293C10.2148 12.293 12.043 10.5 12.043 8.25C12.043 6.03516 10.2148 4.20703 8 4.20703ZM8 10.8867C6.55859 10.8867 5.36328 9.72656 5.36328 8.25C5.36328 6.80859 6.52344 5.64844 8 5.64844C9.44141 5.64844 10.6016 6.80859 10.6016 8.25C10.6016 9.72656 9.44141 10.8867 8 10.8867ZM13.1328 4.06641C13.1328 3.53906 12.7109 3.11719 12.1836 3.11719C11.6562 3.11719 11.2344 3.53906 11.2344 4.06641C11.2344 4.59375 11.6562 5.01562 12.1836 5.01562C12.7109 5.01562 13.1328 4.59375 13.1328 4.06641ZM15.8047 5.01562C15.7344 3.75 15.4531 2.625 14.5391 1.71094C13.625 0.796875 12.5 0.515625 11.2344 0.445312C9.93359 0.375 6.03125 0.375 4.73047 0.445312C3.46484 0.515625 2.375 0.796875 1.42578 1.71094C0.511719 2.625 0.230469 3.75 0.160156 5.01562C0.0898438 6.31641 0.0898438 10.2188 0.160156 11.5195C0.230469 12.7852 0.511719 13.875 1.42578 14.8242C2.375 15.7383 3.46484 16.0195 4.73047 16.0898C6.03125 16.1602 9.93359 16.1602 11.2344 16.0898C12.5 16.0195 13.625 15.7383 14.5391 14.8242C15.4531 13.875 15.7344 12.7852 15.8047 11.5195C15.875 10.2188 15.875 6.31641 15.8047 5.01562ZM14.1172 12.8906C13.8711 13.5938 13.3086 14.1211 12.6406 14.4023C11.5859 14.8242 9.125 14.7188 8 14.7188C6.83984 14.7188 4.37891 14.8242 3.35938 14.4023C2.65625 14.1211 2.12891 13.5938 1.84766 12.8906C1.42578 11.8711 1.53125 9.41016 1.53125 8.25C1.53125 7.125 1.42578 4.66406 1.84766 3.60938C2.12891 2.94141 2.65625 2.41406 3.35938 2.13281C4.37891 1.71094 6.83984 1.81641 8 1.81641C9.125 1.81641 11.5859 1.71094 12.6406 2.13281C13.3086 2.37891 13.8359 2.94141 14.1172 3.60938C14.5391 4.66406 14.4336 7.125 14.4336 8.25C14.4336 9.41016 14.5391 11.8711 14.1172 12.8906Z"
                                    fill="#848484"
                                />
                            </svg>
                        </SocialIcon>
                        <SocialIcon
                            name="snapchat"
                            setSocialMedia={setSocialMedia}
                            active={socialMedia.snapchat}
                        >
                            <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.9297 14.0664C19.0703 13.7852 18.8945 13.5391 18.6836 13.5039C16.2227 13.1172 15.1328 10.5859 15.0625 10.4805C14.9219 10.1992 14.9219 9.98828 14.9922 9.8125C15.1328 9.49609 15.6602 9.32031 15.9766 9.21484C16.082 9.17969 16.1875 9.14453 16.2578 9.10938C16.8555 8.86328 17.1719 8.58203 17.1719 8.23047C17.1367 7.98438 16.9609 7.73828 16.6094 7.59766C16.3984 7.52734 16.1172 7.52734 15.9062 7.59766C15.5898 7.73828 15.3438 7.80859 15.0977 7.84375C14.957 7.80859 14.8516 7.77344 14.8164 7.73828C14.8867 6.47266 15.0625 4.67969 14.6055 3.66016C13.7617 1.76172 12.0039 0.8125 10.1406 0.8125C10.1055 0.8125 9.82422 0.8125 9.78906 0.8125C9.05078 0.8125 6.55469 1.02344 5.35938 3.69531C4.90234 4.67969 5.07812 6.50781 5.14844 7.73828C5.07812 7.77344 4.97266 7.84375 4.79688 7.84375C4.55078 7.84375 4.30469 7.77344 3.98828 7.59766C3.56641 7.42188 2.89844 7.70312 2.82812 8.16016C2.75781 8.40625 2.89844 8.79297 3.70703 9.10938C4.02344 9.25 4.79688 9.39062 4.97266 9.8125C5.04297 9.98828 5.04297 10.1992 4.90234 10.4805C4.83203 10.5859 3.74219 13.1172 1.28125 13.5039C1.10547 13.5391 0.964844 13.7148 0.964844 13.8906H1C1.03516 14.6289 2.65234 14.9102 3.39062 15.0508C3.46094 15.1211 3.53125 15.543 3.63672 15.8945C3.67188 16.0352 3.77734 16.2109 4.05859 16.2109C4.33984 16.2109 4.76172 16.0352 5.42969 16.0352C6.34375 16.0352 6.66016 16.2461 7.39844 16.7734C7.92578 17.125 8.83984 17.793 9.96484 17.7227C11.0547 17.7578 11.793 17.3008 12.5664 16.7734C13.3047 16.2461 13.6211 16.0352 14.5352 16.0352C15.2383 16.0352 15.5898 16.1758 15.9062 16.1758C16.1523 16.1758 16.293 16.0703 16.3281 15.8594C16.4336 15.543 16.5039 15.1211 16.5742 15.0156C17.9805 14.8047 18.7539 14.4883 18.9297 14.0664Z"
                                    fill="#848484"
                                />
                            </svg>
                        </SocialIcon>
                    </InlineBlockItems>
                </Label>
            </FormGroup>
        </form>
    );
}

export default Form
