import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';

export const reducers = combineReducers({
    todo: todoReducer,
});

export type TodoState = ReturnType<typeof reducers>;
