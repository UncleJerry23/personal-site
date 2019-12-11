import React from 'react';
import { useSelector } from 'react-redux';
import { getProjects } from '../../selectors/projectSelectors';
import styles from './projects.css';

const images = {
  ['horse-game']: '../../../assets/unicorn-5.png',
  ['push-pin-backend']: '../../../assets/pushpin.png',
  ['quick-grades']: '../../../assets/scorpion.png'
};

const Projects = () => {
  const projects = useSelector(getProjects);
  return (
    <ul className={styles.Projects}>
      {projects.map(i => {
        return (
          <li key={i.id}>
            <div>
              <img src={images[i.name]} />
            </div>
            <section>
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
