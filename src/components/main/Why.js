import React from 'react';
import styles from './why.css';

const Why = () => {
  return (
    <section className={styles['Why']}>
      <p className={styles.SideBar}>Unlike more traditional left side menus, on expansion, this menu doesn&rsquo;t push text, and hides very little to none of the content on the screen. Which leads to a screen that remains more readable, and less jerky.</p>
      <p className={styles.Burger}>
        Since most people hold their phone in their left hand, and use their right non-thumb fingers to scroll and tap, or hold and scroll with their right hand and thumb, a right side burger menu allows for clicking and scrolling without their hand covering up the screen. This allows the screen to remain more readable while interacting with the menu.
        <a 
          href="https://tristandenyer.com/work/user-research-people-hold-interact-phone/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Phone Use Study
        </a>
      </p>
    </section>
  );
};

export default Why;
