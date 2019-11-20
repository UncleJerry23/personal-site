function addRemoveClass(styles, add, remove) {
  const h2 = document.querySelector(`.${styles[remove]}`);
  h2.classList.remove(styles[remove]);
  h2.classList.add(styles[add]);
}

export const mouseOverClass = styles => {
  addRemoveClass(styles, 'show', 'hide');
};
export const mouseOutClass = styles => {
  addRemoveClass(styles, 'hide', 'show');
};
