import React from 'react';
import styles from './contact.css';
import github from '../../../assets/github.png';
import email from '../../../assets/mail.png';
import linkedin from '../../../assets/linkedin.png';
import resume from '../../../assets/resume.png';
import me from '../../../assets/me.jpg';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <section className={styles.Icons}>
        <a href="https://github.com/UncleJerry23" target="blank" rel="noopener noreferrer" alt="github-profile">
          <img src={github} />
        </a>
        <a href="https://www.linkedin.com/in/jaredmyhrberg/" target="blank" rel="noopener noreferrer" alt="linkedin-profile">
          <img src={linkedin} />
        </a>
        <a href="mailto:jared.myhrberg@gmail.com" target="blank" rel="noopener noreferrer" alt="email-link">
          <img src={email} />
        </a>
        <a href="https://drive.google.com/open?id=1fYGPc-GwNNCTgnWdXiVZsLmBrYQcqxRB" target="blank" rel="noopener noreferrer" alt="resume-link">
          <img src={resume} />
        </a>
      </section>

      <section className={styles.Details}>
        <div>
          <h1>This IS the droid you&rsquo;er looking for...</h1>
        </div>

        <div>
          <img src={me} alt="profile-picture"/>
        </div>

        <div>
          <h2>Full-Stack Software Developer</h2>
          <h3>he / him</h3>
        </div>

        <div>
          <p>An avid life long learner, starting a career in software development. I get excited about finding simple solutions to complex problems and gain energy working on energetic and open-minded teams! I&lsquo;m looking for a challenging career in technology that makes a positive impact on the world.</p>
        </div>

        <div>
          <p>If you&rsquo;d like to hire me for a software position, commission a rad woodworking project or for any other reason please feel free to email me or message me on LinkedIn by using the links to the left.</p>
        </div>
        <div>

          <p>Thanks for stopping by!</p>
        </div>

      </section>
    </div>
  );
};

export default Contact;


