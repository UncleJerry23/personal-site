import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './math.css';
import { mouseOverClass, mouseOutClass } from '../../utils/addRemoveClass';
import { getRandomMathFact } from '../../services/fetchMathFact';

const Math = ({ cssId }) => {
  const [fact, setFact] = useState('');

  return (
    <section id={cssId} className={styles.math}>
      <h2 onMouseOver={() => mouseOverClass(styles)}>is math neat?</h2>
      <p className={styles.hide} onClick={() => {
        getRandomMathFact()
          .then(res => {
            setFact(res);
          });
      }}>
        of course it is, click on me to learn something real neat
      </p>
      <p>{fact}</p>
    </section>
  );
};

Math.propTypes = {
  cssId: PropTypes.string.isRequired
};

export default Math;
