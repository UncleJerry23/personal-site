import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './header.css';

const header = {
  ['']: 'Who is he?',
  ['about-site']: 'About this site',
  ['why']: 'Right Side Menu??',
  ['projects']: 'His Works',
  ['contact']: 'Contact'
};


const Header = () => {
  const history = useHistory();
  let location = history.location.pathname.slice(1);

  return (
    <header className={styles.Header} >
      <div>
        <h1>jared-Myhrberg: </h1>
        <span>&#123;</span>
      </div>
      <h3>&gt; {header[location]}</h3>
    </header>
  );
};

export default Header;
