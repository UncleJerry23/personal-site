import React from 'react';
import { useSelector } from 'react-redux';
import styles from './main.css';
import { info } from '../../../data/info';
import { getSelectedTab } from '../../selectors/getTab';

const Main = () => {
  const selectedTab = useSelector(getSelectedTab);

  return (
    <section className={styles.MainDisplay}>
      <header>
        <h1>jared-Myhrberg: </h1>
        <span>&#123;</span>
      </header>

      <div className={styles.display}>
        <p>{info[selectedTab].text}</p>
      </div>

      <footer>
        <span>&#125;</span>
      </footer>
    </section>
  );
};

export default Main;
