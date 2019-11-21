import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './math.css';
import { getRandomMathFact } from '../../services/fetchMathFact';

const Math = ({ cssId }) => {
  const [fact, setFact] = useState('');

  return (
    <section id={cssId} className={styles.math}>
      <h2 onClick={() => {
        getRandomMathFact()
          .then(res => {
            setFact(res);
          });
      }}>is math neat?</h2>
      
      <p>{fact}</p>
    </section>
  );
};

Math.propTypes = {
  cssId: PropTypes.string.isRequired
};

export default Math;
