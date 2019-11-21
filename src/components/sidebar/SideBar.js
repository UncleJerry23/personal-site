import React from 'react';
import styles from './sideBar.css';
import { useDispatch } from 'react-redux';
import { setSelectedTab } from '../../actions/tabActions';

const SideBar = () => {
  const dispatch = useDispatch();
  const handleTabClick = (e) => {
    dispatch(setSelectedTab(e.target.value));
  };

  return (
    <section className={styles.sidebar}>
      <h2>SideBar</h2>

      <div>
        <input type="radio" name="tab" id="why" value="why" onClick={handleTabClick} />
        <label htmlFor="why" >WHY IS THIS ON THE RIGHT SIDE OF THE PAGE?!?!?</label>

        <input type="radio" name="tab" id="about-me" value="about-me" onClick={handleTabClick} />
        <label htmlFor="about-me" >About Me</label>

        <input type="radio" name="tab" id="about-site" value="about-site" onClick={handleTabClick} />
        <label htmlFor="about-site" >About this site</label>
      
        <input type="radio" name="tab" id="projects" value="projects" onClick={handleTabClick} />
        <label htmlFor="projects" >Projects</label>
      
        <input type="radio" name="tab" id="contact" value="contact" onClick={handleTabClick} />
        <label htmlFor="contact" >Contact Info</label>
      </div>
    </section>
  );
};

export default SideBar;
