import React from 'react';
import styles from './contact.css';
import github from '../../../assets/github.png';
import email from '../../../assets/mail.png';
import linkedin from '../../../assets/linkedin.png';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <section className={styles.Icons}>
        <a href="https://github.com/UncleJerry23" target="blank">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/jaredmyhrberg/" target="blank">
          <img src={linkedin} />
        </a>
        <a href="mailto:jared.myhrberg@gmail.com" target="blank">
          <img src={email} />
        </a>
      </section>

      <section className={styles.Details}>
        <div>
          <p>
          If you&rsquo;d like to hire me for a software position, commission a rad woodworking project or for any other reason please feel free to email me or message me on LinkedIn by using the links to the left.
          </p>
          <p>
          Thanks for stopping by!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
