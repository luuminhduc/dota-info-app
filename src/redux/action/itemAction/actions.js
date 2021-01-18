import * as actions from './actionTypes';
import axios from 'axios';  

const fetchAllItems = () => async dispatch => {
    try{
        const res = await axios({
            method:"GET",
            url:'https://api.opendota.com/api/constants/items',
        })  
        if(res.status === 200 || res.status === 201) {
            dispatch({
                type: actions.FETCH_ALL_ITEMS,
                payload: Object.values(res.data),
            })
        }
    }catch(err) {
        console.log(err);
    } 
}


const updateSearchItem = (term) => {
    return{
        type: actions.UPDATE_SEARCH_ITEM,
        payload:term,
    }
}

const selectItem = (item) =>{
    return{
        type: actions.SELECT_ITEM,
        payload:item
    }
}

const sortItem = (term) => {
    console.log(term);
    return{
        type: actions.SORT_ITEM,
        payload:term,
    }
}

export {fetchAllItems, updateSearchItem, selectItem,sortItem};