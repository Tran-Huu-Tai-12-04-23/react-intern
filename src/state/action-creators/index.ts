import { actionType } from './../action-types/index';
import { Action, StateTodo, Todo } from '../../type';
import { Dispatch } from 'redux';
import { db } from '../../config/firebase';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { ITodo } from '../../models/todo.model';

export const loadData = () => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const todosCollection = collection(db, 'todos');
            const querySnapshot = await getDocs(todosCollection);

            const loadedTodos: Todo[] = [];
            querySnapshot.forEach((doc) => {
                const todoData = doc.data();
                const loadedTodo: ITodo = {
                    id: doc.id,
                    name: todoData.name, // Adjust the property names based on your Firestore data
                    done: todoData.done,
                };
                loadedTodos.push(loadedTodo);
            });

            dispatch({
                type: actionType.LOAD_TODO,
                payload: loadedTodos,
            });

            console.log('Todos loaded successfully!');
        } catch (error) {
            console.error('Error loading todos: ', error);
        }
    };
};

export const addTodo = (todo: Todo) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const todosCollection = collection(db, 'todos');
            const docRef = await addDoc(todosCollection, todo);

            dispatch({
                type: actionType.ADD_TODO,
                payload: { ...todo, id: docRef.id },
            });

            console.log({
                type: actionType.ADD_TODO,
                payload: { ...todo, id: docRef.id },
            });
            console.log('Todo added successfully!');
        } catch (error) {
            console.error('Error adding todo: ', error);
        }
    };
};

export const removeTodo = (id: string) => {
    return async (dispatch: Dispatch<Action>) => {
        if (!id) return;
        try {
            const todosCollection = collection(db, 'todos');
            const todoDocRef = doc(todosCollection, id);

            await deleteDoc(todoDocRef);

            dispatch({
                type: actionType.REMOVE_TODO,
                payload: id,
            });

            console.log('Todo removed successfully!');
        } catch (error) {
            console.error('Error removing todo: ', error);
        }
    };
};

export const clearTodo = () => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const todosCollection = collection(db, 'todos');
            const querySnapshot = await getDocs(todosCollection);

            querySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
            });

            dispatch({
                type: actionType.CLEAR_TODO,
            });

            console.log('All todos cleared successfully!');
        } catch (error) {
            console.error('Error clearing todos: ', error);
        }
    };
};

export const changeStatusTodo = (id: string, done: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        if (!id) return;
        try {
            const todosCollection = collection(db, 'todos');
            const todoDocRef = doc(todosCollection, id);

            await updateDoc(todoDocRef, {
                done: done,
            });

            dispatch({
                type: actionType.CHANGE_STATUS_TODO,
                payload: id,
            });

            console.log('Todo status changed successfully!');
        } catch (error) {
            console.error('Error changing todo status: ', error);
        }
    };
};
