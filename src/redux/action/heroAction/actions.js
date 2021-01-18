import * as actions from './actionTypes';
import axios from 'axios';

const fetchAllHeros = () => async dispatch => {
    try{
        const res = await axios({
            method:"GET",
            url:'https://api.opendota.com/api/constants/hero_names',
        })  
        if(res.status === 200 || res.status === 201) {
            dispatch({
                type: actions.FETCH_ALL_HEROS,
                payload: Object.values(res.data),
            })
        }
    }catch(err) {
        console.log(err);
    } 
}

const updateSearchTerm = (term) => {
    return{
        type: actions.UPDATE_SEARCH_TERM,
        payload:term,
    }
}

const switchType = (type) => {
    return{
        type: actions.SWITCH_TYPE,
        payload: type
    }
}

const selectHero = (hero) => {
    return {
        type: actions.SELECT_HERO,
        payload:hero
    }
}

export {fetchAllHeros, updateSearchTerm, switchType, selectHero};