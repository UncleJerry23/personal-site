export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';
export const SET_SELECTED_TAB_LOADING = 'SET_SELECTED_TAB_LOADING';
export const SET_SELECTED_TAB_DONE = 'SET_SELECTED_TAB_DONE';

export const setSelectedTab = tabName => ({
  type: SET_SELECTED_TAB,
  pendingType: SET_SELECTED_TAB_LOADING,
  fulfilledType: SET_SELECTED_TAB_DONE,
  payload: tabName
});
