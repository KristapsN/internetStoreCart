import { createStore } from 'redux';
// eslint-disable-next-line import/no-cycle
import { reducer } from './reducer';

// @ts-ignore
export const store = createStore(reducer);

