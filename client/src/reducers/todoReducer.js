import {
    ADD_TODO,
    COMPLETED_TODO,
    REMOVE_TODO,
    REMOVE_ALL_TODO,
} from '../actions/type';
import { getLocalStorageData } from '../utils';

const [localTodos] =
    typeof window !== 'undefined' ? getLocalStorageData(['todos']) : null;

export default (state = localTodos || [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    done: false,
                },
                ...state,
            ];
        case COMPLETED_TODO:
            let newState = [...state];
            newState = newState.map(one => {
                if (one.id === action.payload) {
                    one.done = !one.done;
                }
                return one;
            });
            return newState;
        case REMOVE_TODO:
            let newRemoveTodoState = [...state];
            newRemoveTodoState = newRemoveTodoState.filter(
                one => one.id !== action.payload
            );
            return newRemoveTodoState;
        case REMOVE_ALL_TODO:
            return [];
        default:
            return state;
    }
};
