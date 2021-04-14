import React from 'react'

import Persona from '../Persona';

import styles from './index.module.css';

function SelectAvatar({ currentAvatar, setAvatarIndex }) {
    return (
        <div>
            <h1 className={styles.title}>Choose another avatar:</h1>
            <div className={styles.avatars}>
                <Persona setAvatarIndex={setAvatarIndex} index={1}></Persona>
                <Persona setAvatarIndex={setAvatarIndex} index={2}></Persona>
                <Persona setAvatarIndex={setAvatarIndex} index={3}></Persona>
                <Persona setAvatarIndex={setAvatarIndex} index={4}></Persona>
                <Persona setAvatarIndex={setAvatarIndex} index={5}></Persona>
                <Persona setAvatarIndex={setAvatarIndex} index={6}></Persona>
                <Persona setAvatarIndex={setAvatarIndex} index={7}></Persona>
                <Persona setAvatarIndex={setAvatarIndex} index={8}></Persona>
                <Persona setAvatarIndex={setAvatarIndex} index={9}></Persona>
                <Persona setAvatarIndex={setAvatarIndex} index={10}></Persona>
            </div>
        </div>
    );
}

export default SelectAvatar
