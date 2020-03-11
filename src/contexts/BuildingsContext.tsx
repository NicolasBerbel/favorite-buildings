import React from 'react';
import { IBuildingsResponse } from '../services/api';

interface IBuildingsState {
  pageNumber: number,
  pages: {
    [pageNumber : number]: IBuildingsResponse
  },
  loading: boolean,
  error: string,
}

const initialState : IBuildingsState = {
  pageNumber: 0,
  pages: {},
  loading: false,
  error: '',
}

export const buildingsStore = React.createContext({state: initialState, dispatch: (action : Action) => {} });
const { Provider } = buildingsStore;

type Action =
 | { type: 'request' }
 | { type: 'success', response: IBuildingsResponse }
 | { type: 'failure', error: string };

export const BuildingsProvider : React.FC = ({children}) => {
  const [state, dispatch] = React.useReducer(
    (state : IBuildingsState, action : Action) => {
      switch(action.type) {
        case 'request':
          return {
            ...state,
            loading: true,
          };
        case 'success':
          return {
            ...state,
            loading: false,
            pageNumber: action.response.page,
            pages: {
              ...state.pages,
              [action.response.page]: action.response
            },
          }
        case 'failure':
          return {
            ...state,
            loading: false,
            error: action.error
          }
        default:
          return state;
      };
    }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}
