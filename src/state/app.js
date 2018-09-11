const initialState = {
  isMainNavVisible: false,
};

const TOGGLE_MAIN_NAV = 'TOGGLE_MAIN_NAV';


export const toggleMainNav = visible => ({ type: TOGGLE_MAIN_NAV, payload: visible });

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MAIN_NAV:
      return { ...state, isMainNavVisible: payload };
    default:
      return state;
  }
};
