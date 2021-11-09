
import axios from "axios"
import { ADD_FAV, ADD_FAV_FAILED } from "../types";
import { IdUrl } from "./foodDetailsAction";



export const AddFavoriteAction = (mealID) => async (dispatch) => {
    await axios.get(IdUrl,
        {
            params: {
                i: mealID,
            }
        }).then(res=>{
            const {data} = res ;
            console.log(data.meals[0]);
            return dispatch({
                type:ADD_FAV,

                payload: {
                    MealId : data.meals[0].idMeal,
                    Meal: data.meals[0].strMeal,
                    description : data.meals[0].strInstructions,
                    imagePath : data.meals[0].strMealThumb,
                },
            })
        }).catch(err =>{
            
            return dispatch({
                type: ADD_FAV_FAILED,
                payload:err
            })
        })
}


