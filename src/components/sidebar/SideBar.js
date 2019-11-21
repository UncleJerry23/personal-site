import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTab } from '../../actions/tabActions';
import { getSelectedTab } from '../../selectors/getTab';
import styles from './sideBar.css';
let hasLoaded = false;

const SideBar = () => {
  const selectedTab = useSelector(getSelectedTab);
  const dispatch = useDispatch();
  const handleTabClick = (e) => {
    dispatch(setSelectedTab(e.target.value));
  };

  useEffect(() => {
    if(hasLoaded) {
      document.querySelector(`.${styles.selected}`).className = '';
      document.querySelector(`#label-${selectedTab}`).className = styles.selected;
    }
    if(!hasLoaded) hasLoaded = true;
  }, [selectedTab]);


  return (
    <section className={styles.sidebar}>
      <h2>SideBar</h2>

      <div>
        <input type="radio" name="tab" id="why" value="why" onClick={handleTabClick} />
        <label id="label-why" htmlFor="why" >WHY IS THIS ON THE RIGHT SIDE OF THE PAGE?!?!?</label>

        <input type="radio" name="tab" id="about-me" value="about-me" onClick={handleTabClick} />
        <label id="label-about-me" className={styles.selected} htmlFor="about-me" >About Me</label>

        <input type="radio" name="tab" id="about-site" value="about-site" onClick={handleTabClick} />
        <label id="label-about-site" htmlFor="about-site" >About this site</label>
      
        <input type="radio" name="tab" id="projects" value="projects" onClick={handleTabClick} />
        <label id="label-projects" htmlFor="projects" >Projects</label>
      
        <input type="radio" name="tab" id="contact" value="contact" onClick={handleTabClick} />
        <label id="label-contact" htmlFor="contact" >Contact Info</label>
      </div>
    </section>
  );
};

export default SideBar;
