import { ITodo } from './models/todo.model';
import { actionType } from './state/action-types';

export type Todo = ITodo;

export type StateTodo = {
    todoList: ITodo[];
};

interface actionRemoveTodo {
    type: actionType.REMOVE_TODO;
    payload: string;
}
interface actionAddTodo {
    type: actionType.ADD_TODO;
    payload: ITodo;
}

interface actionClearTodo {
    type: actionType.CLEAR_TODO;
}

interface actionChangeStatusTodo {
    type: actionType.CHANGE_STATUS_TODO;
    payload: string;
}

interface loadTodo {
    type: actionType.LOAD_TODO;
    payload: ITodo[];
}

export type Action = actionAddTodo | actionRemoveTodo | actionChangeStatusTodo | actionClearTodo | loadTodo;
