import db from "../../firebase/firebase.config";
import { 
    ADD_TODO, 
    DELETE_TODO, 
    READ_TODO, 
    UPDATE_TODO, 
    UPDATE_TODO_STATUS
    } from "../Action-Types/actionTypes";

    import { onValue, push, ref, remove, update } from "firebase/database";

export const add_todo = (text) => {
    return async (dispatch) =>{
        const newTodoRef = push(ref(db, 'applicant_Info'), {
            text,
        });

        dispatch({
            type: ADD_TODO,
            payload: { id:newTodoRef.key, text }
        })
    }
};

export const delete_todo = (id) => {
    return async (dispatch) =>{
        await remove(ref(db, `applicant_Info/${id}`));

        dispatch({
            type: DELETE_TODO,
            payload: id,
        })
    }
};

export const update_todo = (id, updatedField) => {
    return async (dispatch) =>{
        await update(ref(db, `applicant_Info/${id}`));

        dispatch({
            type: UPDATE_TODO,
            payload: { id, ...updatedField }
        })
    }
};

export const update_todo_status = (id, status) =>{
    return async(dispatch) =>{
        await update(ref(db, `applicant_Info/${id}`), {status});
         
        dispatch({
            type: UPDATE_TODO_STATUS,
            payload: { id, status },
        })
    }
}

export const read_todo = () =>{
    return (dispatch) =>{
        const applicantsRef = ref(db, 'applicant_Info');
        onValue(applicantsRef, (snapshot) =>{
            const data = snapshot.val() || {};
            const applicant_list = Object.entries(data).map(([id, value]) => ({
                id,
                ...value
            }));

            dispatch({
                type: READ_TODO,
                payload: applicant_list
            })
        })
    }
}