import { CREATE_JSON, DispatchTypes } from '../actions/ActionTypes';
import { createTheme } from '@mui/material';

const t = {
  ...createTheme({
    palette: {
      color: {
        p1: `#000`,
        s1: `#000`,
        a1: `#000`,
        tp1: `#000`,
        ts1: `#000`,
        ta1: `#000`,
        error: '#f00',
        warning: '#ffa500',
        success: '#0f0',
        info: '#00f',
      },
      darkColor: {
        p1: `#000`,
        s1: `#000`,
        a1: `#000`,
        tp1: `#000`,
        ts1: `#000`,
        ta1: `#000`,
        error: '#f00',
        warning: '#ffa500',
        success: '#0f0',
        info: '#00f',
      },
      lightColor: {
        p1: `#000`,
        s1: `#000`,
        a1: `#000`,
        tp1: `#000`,
        ts1: `#000`,
        ta1: `#000`,
        error: '#f00',
        warning: '#ffa500',
        success: '#0f0',
        info: '#00f',
      },
      primary: {
        main: `#000`,
      },
      secondary: {
        main: `#000`,
      },
      error: {
        main: '#f00',
      },
    },
  }),
};

const initial_state: stateType = {
  /**
   * Loading
   */
  loading: true,

  dark_mode: true,
  theme: t,
};

interface stateType {
  loading: boolean;
  dark_mode: boolean;
  theme: typeof t;
}

const RootReducer = (
  state: stateType = initial_state,
  action: DispatchTypes
): stateType => {
  switch (action.type) {
    // Create a JSON object with some key
    case CREATE_JSON:
      return {
        ...state,
        [action.key]: action.json,
      };

    default:
      return state;
  }
};

export default RootReducer;
