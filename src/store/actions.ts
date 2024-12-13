export const SET_LOADING = 'SET_LOADING';
export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: {
    id: string;
    name: string;
    email: string;
    age: number;
  };
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type ActionTypes = SetLoadingAction | SetUserAction | SetErrorAction;

export const setLoading = (loading: boolean): SetLoadingAction => ({
  type: SET_LOADING,
  payload: loading,
});

export const setUser = (user: SetUserAction['payload']): SetUserAction => ({
  type: SET_USER,
  payload: user,
});

export const setError = (error: string): SetErrorAction => ({
  type: SET_ERROR,
  payload: error,
});
