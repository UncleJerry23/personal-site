import React from 'react';
import { useSelector } from 'react-redux';
import { getProjects } from '../../selectors/projectSelectors';
import styles from './projects.css';

const images = {
  ['horse-game']: 'https://i.imgur.com/ZvxpAIv.png',
  ['push-pin-backend']: 'https://i.imgur.com/9Mtn7n9.png',
  ['quick-grades']: 'https://i.imgur.com/Pxtx3DK.png'
};

const Projects = () => {
  const projects = useSelector(getProjects);
  return (
    <ul className={styles.Projects}>
      {projects.map(i => {
        return (
          <li key={i.id}>

            <section className={styles['Image-Container']}>
              <img src={images[i.name] || 'https://i.imgur.com/IWhPTlk.jpg'} alt="logo"/>
            </section>

            <section className={styles['Details-Container']}>
              <a href={i.url} target="_blank" rel="noopener noreferrer" >
                <h2>{i.name}</h2>
              </a>
              <p>{i.description}</p>
            </section>
            
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
