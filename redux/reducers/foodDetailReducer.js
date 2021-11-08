import { FOOD_DETAILS, FOOD_DETAILS_FAILED } from "../types"

const intialstate ={
    des:{},
    err:""
}

export const foodDetailReducer = (state = intialstate , action)=>{
          switch (action.type) {
             case FOOD_DETAILS:
                   return({
                       ...state,
                       des:action.payload ,
                       
                   })

                case FOOD_DETAILS_FAILED:
                    return({
                        ...state,
                        err:action.payload ,
                        
                    })   
              default:
                  return state
          }
}