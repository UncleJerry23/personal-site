import React from 'react';
import styles from './app.css';
import SideBar from './sidebar/SideBar';
import SpinningHead from './spinningHead/SpinningHead';
import Math from './math/Math';


export default function App() {
  return (
    <section className={styles.app} >
      <SideBar cssId={styles.sidebar} />
      <div className={styles.left}>
        <SpinningHead cssId={styles['spinning-head']}/>
        <Math cssId={styles.math} />
      </div>
    </section>
  );
}
