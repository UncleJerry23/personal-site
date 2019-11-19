import React from 'react';
import styles from './app.css';
import SideBar from './sidebar/SideBar';
import SpinningHead from './spinningHead/SpinningHead';

export default function App() {
  return (
    <section className={styles.app} >
      <SpinningHead />
      <SideBar cssId={styles.sidebar}/>
    </section>
  );
}
