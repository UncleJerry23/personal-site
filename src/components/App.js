import React from 'react';
import styles from './app.css';
import SideBar from './sidebar/SideBar';
import Main from './main/Main';

export default function App() {

  return (
    <section className={styles.app} >

      <div className={styles.left}>
        <Main />
      </div>

      <div className={styles.sidebar}>
        <SideBar />
      </div>
    </section>
  );
}
