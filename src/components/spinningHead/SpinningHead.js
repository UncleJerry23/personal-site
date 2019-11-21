import React from 'react';
import face from '../../../assets/face.jpg';
import styles from './spinning-head.css';
import { mouseOverClass, mouseOutClass } from '../../utils/addRemoveClass';

const SpinningHead = () => {
  return (
    <section className={styles['spinning-head']}>
      <img 
        src={face} 
        onMouseOver={() => mouseOverClass(styles)}
        onMouseOut={() => mouseOutClass(styles)}
      />
      <h2 className={styles.hide}>gee wiz thanks for stopping by</h2>
    </section>
  );
};

export default SpinningHead;
