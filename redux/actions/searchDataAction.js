import axios from 'axios';
import { SEARCHED_DATA, SEARCHED_DATA_FAILED, SEARCHED_DATA_SUCCESSFULLY } from '../types';

const searchUrl = "https://www.themealdb.com/api/json/v1/1/search.php";

export const searchDataAction = (search) => async (dispatch) => {
    dispatch({ type: SEARCHED_DATA });
    
    await axios.get(searchUrl, {
        params: {
            s: search,
        }
    }).then(res => {
         const {data} = res;
         console.log(data)
        return dispatch({
            type: SEARCHED_DATA_SUCCESSFULLY,
            payload: data,
        })
    })
        .catch(err => {

            return dispatch({
                type: SEARCHED_DATA_FAILED,
                payload: err,

            })
        })
}