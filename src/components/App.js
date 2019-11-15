import React from 'react';
import styles from './app.css';
import SideBar from './sidebar/SideBar';

export default function App() {
  return (
    <section className={styles.app} >
      <SideBar cssId={styles.sidebar}/>
    </section>
  );
}
