import * as actions from './actionType';
import axios from 'axios';
const fetchAllLores = () => async dispatch => {
    try{
        const res = await axios({
            method:"GET",
            url:'https://api.opendota.com/api/constants/hero_lore',
        })  
        if(res.status === 200 || res.status === 201) {
            dispatch({
                type: actions.FETCH_ALL_LORES,
                payload: res.data,
            })
        }
    }catch(err) {
        console.log(err);
    } 
}

export {fetchAllLores};