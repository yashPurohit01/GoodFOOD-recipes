import axios from 'axios'
import { DATA_LOADED_FAILED, DATA_LOADED_SUCCESSFULLY, DATA_LOADER } from '../types';

export const url = "https://www.themealdb.com/api/json/v1/1/random.php"

export const dataLoaderAction = () => async(dispatch)=>{
    dispatch({type:DATA_LOADER});
    await axios.get(url)
    .then(res=>{
        
        return dispatch({
            type:DATA_LOADED_SUCCESSFULLY,
            payload: res.data,
        })
    }).catch(err =>{
       
      return  dispatch({
        type:DATA_LOADED_FAILED,
        payload:err

       }) 
    })
}