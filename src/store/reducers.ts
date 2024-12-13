import { SET_LOADING, SET_USER, SET_ERROR, ActionTypes } from './actions';

interface State {
  loading: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    age: number;
  } | null;
  error: string;
}

const initialState: State = {
  loading: false,
  user: null,
  error: '',
};

export const rootReducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
