import React from 'react';
import styles from './about-me.css';
import { info } from '../../../data/info';

const images = {
  leaner: '../../../assets/leaner.jpg',
  creator: '../../../assets/creator.jpg',
  adventure: '../../../assets/adventure.jpg',
  nerd: '../../../assets/nerd.jpg'
};

const background = (img) => ({
  backgroundImage: `url(${img})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
});

const AboutMe = () => {

  return (
    <div className={styles['About-Me']}>
      <section style={background(images.leaner)}>
        <div>
          <h3>Learner:</h3>
          <p>{info['about-me'].learner}</p>
        </div>
      </section>

      <section style={background(images.creator)}>
        <div>
          <h3>Creator:</h3>
          <p>{info['about-me'].creator}</p>
        </div>
      </section>

      <section style={background(images.adventure)}>
        <div>
          <h3>Adventurer:</h3>
          <p>{info['about-me'].adventurer}</p>
        </div>
      </section>

      <section style={background(images.nerd)}>
        <div>
          <h3>Nerd:</h3>
          <p>{info['about-me'].nerd}</p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
