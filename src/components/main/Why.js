import React from 'react';
import styles from './why.css';
import { info } from '../../../data/info';

const Why = () => {
  return (
    <section className={styles['Why']}>
      <p>{info['why'].text}</p>
    </section>
  );
};

export default Why;
