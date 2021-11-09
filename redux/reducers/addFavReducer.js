import { ADD_FAV } from "../types"

const initialstate={
   favproduct :[],
}

export const addFavReducer = (state = initialstate ,action) =>{
    
       switch(action.type){
           case ADD_FAV :
               const favItem = action.payload ;
               const itemsPresent = state.favproduct.find(item => item.MealId === favItem.MealId);
               console.log(itemsPresent)
               if(itemsPresent)
               {
                   return {
                       ...state
                   }
               }
               else{
                   return{
                       ...state ,
                    favproduct : [...state.favproduct , favItem],
                    

                   } 
               }
               default:
                 return state 
       }
}