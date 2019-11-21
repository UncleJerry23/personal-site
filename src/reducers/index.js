export const setSelectedTab = 'SET_SELECTED_TAB';

const initialState = {
  selectedTab: 'about-me'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case setSelectedTab:
      return { selectedTab: action.payload };
    default:
      return state;
  }
}
