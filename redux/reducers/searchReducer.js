import { SEARCHED_DATA, SEARCHED_DATA_FAILED, SEARCHED_DATA_SUCCESSFULLY } from '../types';


const intialstate ={
    data:{},
    loading:false,
    err:""
}

export const searchReducer = (state = intialstate , action)=>{
          switch (action.type) {
              case SEARCHED_DATA:
                  return({
                      ...state,
                      loading:true,
                  })
                
               case SEARCHED_DATA_SUCCESSFULLY:
                   return({
                       ...state,
                       data:action.payload ,
                       loading:false ,
                   })

                case SEARCHED_DATA_FAILED:
                    return({
                        ...state,
                        err:action.payload ,
                        loading:false ,
                    })   
              default:
                  return state
          }
}