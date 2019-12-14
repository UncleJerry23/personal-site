import { useEffect } from 'react';

export const useSideBar = (styles, history) => {
  let selected = 'about-me';
  let location = history.location.pathname.slice(1);
  location === '' ? selected = 'home' : selected = location;

  useEffect(() => {
    const old = document.querySelectorAll(`.${styles.Selected}`);
    old.forEach(i => i.className = '');
    document.querySelectorAll(`#${selected}`).forEach(i => i.className = styles.Selected);
  });
};
