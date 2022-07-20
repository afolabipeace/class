const increase = (num)=>{
    return{
        type:'INCREASE',
        payload:num
    }
}
const decrease = (num)=>{
    return{
        type:'DECREASE',
        payload:num
    }
}
export {increase,decrease}