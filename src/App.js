import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Form from './components/Form';
import DownloadButton from './components/DownloadButton'
import Sections from './components/Sections';
import SelectAvatar from './components/SelectAvatar'

import styles from './App.module.css';

function App() {
    const [avatarIndex, setAvatarIndex] = useState(9)

  return (
      <Router>
          <div className={styles.app}>
              <div className={styles.header}>
                  <h1>Create Your Own Buyer Persona:</h1>
                  <DownloadButton title="Download the PDF">
                      <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              d="M17.5 12.375H15.3906L13.5156 14.25H17.5C17.8125 14.25 18.125 14.5625 18.125 14.875V18C18.125 18.3516 17.8125 18.625 17.5 18.625H2.5C2.14844 18.625 1.875 18.3516 1.875 18V14.875C1.875 14.5625 2.14844 14.25 2.5 14.25H6.44531L4.57031 12.375H2.5C1.09375 12.375 0 13.5078 0 14.875V18C0 19.4062 1.09375 20.5 2.5 20.5H17.5C18.8672 20.5 20 19.4062 20 18V14.875C20 13.5078 18.8672 12.375 17.5 12.375ZM16.875 16.4375C16.875 15.9297 16.4453 15.5 15.9375 15.5C15.3906 15.5 15 15.9297 15 16.4375C15 16.9844 15.3906 17.375 15.9375 17.375C16.4453 17.375 16.875 16.9844 16.875 16.4375ZM9.33594 14.9141C9.49219 15.1094 9.72656 15.1875 10 15.1875C10.2344 15.1875 10.4688 15.1094 10.625 14.9141L15.9375 9.60156C16.3281 9.25 16.3281 8.66406 15.9375 8.3125C15.5859 7.92188 15 7.92188 14.6484 8.3125L10.9375 12.0234V1.4375C10.9375 0.929688 10.5078 0.5 10 0.5C9.45312 0.5 9.0625 0.929688 9.0625 1.4375V12.0234L5.3125 8.3125C4.96094 7.92188 4.375 7.92188 4.02344 8.3125C3.63281 8.66406 3.63281 9.25 4.02344 9.60156L9.33594 14.9141Z"
                              fill="white"
                          />
                      </svg>
                  </DownloadButton>
              </div>
              <div className={styles.content}>
                  <aside className={styles.aside}>
                      <Form avatarIndex={avatarIndex} />
                  </aside>
                  <div className={styles.mainContent}>
                      <Route path="/" exact component={Sections} />
                      <Route path="/avatar">
                          <SelectAvatar
                              currentAvatar={avatarIndex}
                              setAvatarIndex={setAvatarIndex}
                          />
                      </Route>
                  </div>
              </div>
          </div>
      </Router>
  );
}

export default App;
