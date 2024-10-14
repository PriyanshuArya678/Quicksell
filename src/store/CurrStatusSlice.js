import { createSlice } from "@reduxjs/toolkit";
const initialState={
    group:'Status',
    order:'Title'
}
export const CurrStatusSlice=createSlice({
    name:'currState',
    initialState,
    reducers:{
        changeGroup :(state,action)=>{
            state.group =action.payload
        },
        changeOrder:(state,action)=>{
            state.order=action.payload
        }
    }
})
export default CurrStatusSlice.reducer
export const {changeGroup,changeOrder} =CurrStatusSlice.actions