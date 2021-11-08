import axios from 'axios';
import { FOOD_DETAILS, FOOD_DETAILS_FAILED } from '../types';


const IdUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php";
  /* www.themealdb.com/api/json/v1/1/lookup.php?i=52772 */

export const foodDetailsAction = (id) => async (dispatch) => {
    
    
    await axios.get(IdUrl, {
        params: {
            i:id,
        }
    }).then(res => {
         const {data} = res;
         console.log(data)
        return dispatch({
            type: FOOD_DETAILS,
            payload: data,
        })
    })
        .catch(err => {

            return dispatch({
                type: FOOD_DETAILS_FAILED,
                payload: err,

            })
        })
}