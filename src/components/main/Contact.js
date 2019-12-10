import React from 'react';
import styles from './contact.css';
import github from '../../../assets/github.png';
import email from '../../../assets/mail.png';
import linkedin from '../../../assets/linkedin.png';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <a href="https://github.com/UncleJerry23">
        <img src={github} />
        <h2>https://github.com/UncleJerry23</h2>
      </a>
      <a href="https://www.linkedin.com/in/jaredmyhrberg/">
        <img src={email} />
        <h2>jared.myhrberg@gmail.com</h2>
      </a>
      <a href="https://www.linkedin.com/in/jaredmyhrberg/">
        <img src={linkedin} />
        <h2>https://www.linkedin.com/in/jaredmyhrberg/</h2>
      </a>
    </div>
  );
};

export default Contact;
