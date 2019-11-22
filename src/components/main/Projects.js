import React from 'react';
import { useSelector } from 'react-redux';
import { getProjects } from '../../selectors/projectSelectors';
// import PropTypes from 'prop-types';

const Projects = () => {
  const projects = useSelector(getProjects);
  return (
    <ul>
      {projects.map(i => {
        return (
          <li key={i.id}>
            <a href={i.url} target="_blank" rel="noopener noreferrer" >
              <h2>{i.name}</h2>
            </a>
            <p>{i.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
