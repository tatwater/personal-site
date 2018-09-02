const initialState = {
  isProductsDropdownVisible: false,
  isMobileNavVisible: false,
  whichExploreFeatureVisible: 0,
  whichEngageFeatureVisible: 0,
  whichAnalyzeFeatureVisible: 0,
  whichEducateFeatureVisible: 0,
  whichThreadFeatureVisible: 0,
  isStartupModalVisible: false,
  whichFAQVisible: '',
};

const TOGGLE_PRODUCTS_DROPDOWN = 'TOGGLE_PRODUCTS_DROPDOWN';
const TOGGLE_MOBILE_NAV = 'TOGGLE_MOBILE_NAV';
const TOGGLE_EXPLORE_FEATURE = 'TOGGLE_EXPLORE_FEATURE';
const TOGGLE_ENGAGE_FEATURE = 'TOGGLE_ENGAGE_FEATURE';
const TOGGLE_ANALYZE_FEATURE = 'TOGGLE_ANALYZE_FEATURE';
const TOGGLE_EDUCATE_FEATURE = 'TOGGLE_EDUCATE_FEATURE';
const TOGGLE_THREAD_FEATURE = 'TOGGLE_THREAD_FEATURE';
const TOGGLE_STARTUP_MODAL = 'TOGGLE_STARTUP_MODAL';
const TOGGLE_FAQ = 'TOGGLE_FAQ';


export const toggleProductsDropdown = visible => ({ type: TOGGLE_PRODUCTS_DROPDOWN, payload: visible });
export const toggleMobileNav = visible => ({ type: TOGGLE_MOBILE_NAV, payload: visible });
export const toggleExploreFeature = visible => ({ type: TOGGLE_EXPLORE_FEATURE, payload: visible });
export const toggleEngageFeature = visible => ({ type: TOGGLE_ENGAGE_FEATURE, payload: visible });
export const toggleAnalyzeFeature = visible => ({ type: TOGGLE_ANALYZE_FEATURE, payload: visible });
export const toggleEducateFeature = visible => ({ type: TOGGLE_EDUCATE_FEATURE, payload: visible });
export const toggleThreadFeature = visible => ({ type: TOGGLE_THREAD_FEATURE, payload: visible });
export const toggleStartupModal = visible => ({ type: TOGGLE_STARTUP_MODAL, payload: visible });
export const toggleFAQ = visible => ({ type: TOGGLE_FAQ, payload: visible });

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_PRODUCTS_DROPDOWN:
      return { ...state, isProductsDropdownVisible: payload };
    case TOGGLE_MOBILE_NAV:
      return { ...state, isMobileNavVisible: payload };
    case TOGGLE_EXPLORE_FEATURE:
      return { ...state, whichExploreFeatureVisible: payload };
    case TOGGLE_ENGAGE_FEATURE:
      return { ...state, whichEngageFeatureVisible: payload };
    case TOGGLE_ANALYZE_FEATURE:
      return { ...state, whichAnalyzeFeatureVisible: payload };
    case TOGGLE_EDUCATE_FEATURE:
      return { ...state, whichEducateFeatureVisible: payload };
    case TOGGLE_THREAD_FEATURE:
      return { ...state, whichThreadFeatureVisible: payload };
    case TOGGLE_STARTUP_MODAL:
      return { ...state, isStartupModalVisible: payload };
    case TOGGLE_FAQ:
      return { ...state, whichFAQVisible: payload };
    default:
      return state;
  }
};
