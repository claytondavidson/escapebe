import { Types } from '../actions';

const { GET_DASHBOARD, DASHBOARD_ERROR, GET_DASHBOARDS, CLEAR_MEMBER } = Types;

const initialState = {
  dashboard: null,
  dashboards: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DASHBOARD:
      return {
        ...state,
        dashboard: payload,
        loading: false,
      };
    case GET_DASHBOARDS:
      return {
        ...state,
        dashboards: payload,
        loading: false,
      };
    case DASHBOARD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_MEMBER:
      return {
        ...state,
        dashboard: null,
        loading: true,
      };
    default:
      return state;
  }
}
