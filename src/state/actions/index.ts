import { Dispatch } from 'redux';
import { CreateJSON } from './ActionTypes';

export const CREATE_JSON = (key: string, json: {} | string) => {
  return (dispatch: Dispatch<CreateJSON>) => {
    dispatch({
      type: 'CREATE_JSON',
      key: key,
      json: json,
    });
  };
};
