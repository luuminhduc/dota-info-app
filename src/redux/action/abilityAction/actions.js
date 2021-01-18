import * as actions from './actionTypes';
import axios from 'axios';
const fetchAllAbilities = () => async dispatch => {
    try{
        const res = await axios({
            method:"GET",
            url:'https://api.opendota.com/api/constants/hero_abilities',
        })  
        if(res.status === 200 || res.status === 201) {
            dispatch({
                type: actions.FETCH_ALL_ABILITIES,
                payload: res.data,
            })
        }
    }catch(err) {
        console.log(err);
    } 
}

export {fetchAllAbilities};