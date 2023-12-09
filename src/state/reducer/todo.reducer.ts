import { Action, StateTodo } from '../../type';
import { actionType } from '../action-types';

const initialState: StateTodo = {
    todoList: [],
};

export const todoReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case actionType.LOAD_TODO: {
            return {
                todoList: [...action.payload],
            };
        }
        case actionType.ADD_TODO: {
            return {
                todoList: [...state.todoList, action.payload],
            };
        }
        case actionType.REMOVE_TODO: {
            return {
                todoList: [...state.todoList.filter((todo) => todo.id !== action.payload)],
            };
        }
        case actionType.CLEAR_TODO: {
            return {
                todoList: [],
            };
        }
        case actionType.CHANGE_STATUS_TODO: {
            return {
                todoList: [
                    ...state.todoList.map((todo) => {
                        if (todo.id === action.payload) {
                            return {
                                ...todo,
                                done: !todo.done,
                            };
                        }
                        return todo;
                    }),
                ],
            };
        }
        default:
            return state;
    }
};
