import React from 'react';
import face from '../../../assets/face.jpg';
import styles from './spinning-head.css';

const SpinningHead = () => {
  return (
    <section className={styles['spinning-head']}>
      <img 
        src={face} 
        onMouseOver={() => {
          addRemoveClass('show', 'hide');
        }}
        onMouseOut={() => {
          addRemoveClass('hide', 'show');
        }}
      />
      <h2 className={styles.hide}>gee wiz thanks for stopping by</h2>
    </section>
  );
};

function addRemoveClass(add, remove) {
  const h2 = document.querySelector(`.${styles[remove]}`);
  h2.classList.remove(styles[remove]);
  h2.classList.add(styles[add]);
}

export default SpinningHead;
