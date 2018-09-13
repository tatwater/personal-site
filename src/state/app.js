const initialState = {
  isMainNavVisible: false,
  areInstructionsVisible: false,
};

const TOGGLE_MAIN_NAV = 'TOGGLE_MAIN_NAV';
const TOGGLE_INSTRUCTIONS = 'TOGGLE_INSTRUCTIONS';


export const toggleMainNav = visible => ({ type: TOGGLE_MAIN_NAV, payload: visible });
export const toggleInstructions = visible => ({ type: TOGGLE_INSTRUCTIONS, payload: visible });

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MAIN_NAV:
      return { ...state, isMainNavVisible: payload };
    case TOGGLE_INSTRUCTIONS:
      return { ...state, areInstructionsVisible: payload };
    default:
      return state;
  }
};
