export const setSelectedTab = 'SET_SELECTED_TAB';

const initialState = {
  selectedTab: null
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case setSelectedTab:
      return { selectedTab: action.payload };
    default:
      return state;
  }
}
