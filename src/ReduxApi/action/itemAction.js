import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, UPDATE_ITEM } from './type';
import axios from 'axios';
const url = 'http://localhost:8000'


export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get(url)
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            }))
}


export const deleteItems = id => dispatch => {
    axios.delete(`${url}/${id}`).then(
        res => dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    )

}


export const addItems = item => dispatch => {
    axios.post(url, item).then(
        res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        })
    )
}

export const updateItems = (item, id) => dispatch => {
    axios.put(`${url}/${id}`, item).then(
        res => dispatch({
            type: UPDATE_ITEM,
            payload: [res.id, res.data]
        })
    )
}
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}