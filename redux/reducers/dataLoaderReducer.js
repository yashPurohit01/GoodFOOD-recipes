import { DATA_LOADED_FAILED, DATA_LOADED_SUCCESSFULLY, DATA_LOADER } from '../types';


const intialstate ={
    randomData:{},
    loading:false,
    err:""
}

export const dataLoadReducer = (state = intialstate , action)=>{
          switch (action.type) {
              case DATA_LOADER:
                  return({
                      ...state,
                      loading:true,
                  })
                
               case DATA_LOADED_SUCCESSFULLY:
                   return({
                       ...state,
                       randomData:action.payload ,
                       loading:false ,
                   })

                case DATA_LOADED_FAILED:
                    return({
                        ...state,
                        err:action.payload ,
                        loading:false ,
                    })   
              default:
                  return state
          }
}