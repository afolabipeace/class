const initState={
    count : 0,
    name :"kola"
}
const counter = (state=initState,action) => {
    if(action.type=='INCREASE'){
        return {
            ...state,
            count:state.count+action.payload
        }
    }else if(action.type == 'DECREASE'){
        return {
            ...state,
            count:state.count-action.payload
        }
    }else{
        return state;
    }
}
export default counter;