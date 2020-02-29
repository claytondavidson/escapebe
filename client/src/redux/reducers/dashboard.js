import { GET_DASHBOARD, DASHBOARD_ERROR, CLEAR_USER } from '../actions/types';

const initialState = {
  dashboard: null,
  dashboards: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DASHBOARD:
      return {
        ...state,
        dashboard: payload,
        loading: false
      };
    case DASHBOARD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_USER:
      return {
        ...state,
        dashboard: null,
        loading: true
      };
    default:
      return state;
  }
}