import React from 'react';
import styles from './contact.css';
import github from '../../../assets/github.png';
import email from '../../../assets/mail.png';
import linkedin from '../../../assets/linkedin.png';
import face from '../../../assets/face.jpg';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <a href="https://github.com/UncleJerry23" target="blank">
        <img src={github} />
        <h2>github.com/UncleJerry23</h2>
      </a>
      <a href="https://www.linkedin.com/in/jaredmyhrberg/" target="blank">
        <img src={email} />
        <h2>jared.myhrberg@gmail.com</h2>
      </a>
      <a href="https://www.linkedin.com/in/jaredmyhrberg/" target="blank">
        <img src={linkedin} />
        <h2>linkedin.com/in/jaredmyhrberg/</h2>
      </a>
      <a href="https://drive.google.com/file/d/1LsmfQAmLWltdzJFwCH5PdCBtl6EiKkOT/view" target="blank">
        <img src={face} />
        <h2>Resume</h2>
      </a>
    </div>
  );
};

export default Contact;
