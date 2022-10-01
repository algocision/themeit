export const CREATE_JSON = 'CREATE_JSON';

export type CreateJSON = {
  type: typeof CREATE_JSON;
  key: string;
  json: {} | string;
};
export type DispatchTypes = CreateJSON;
