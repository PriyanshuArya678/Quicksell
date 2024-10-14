import { createSlice } from "@reduxjs/toolkit";
const initialState={
    data:[]
}
export const DataSlice=createSlice({
    name:'data',
    initialState,
    reducers:{
        addData: (state,action)=>{
            state.data=action.payload
        }
    }
})
export default DataSlice.reducer
export const {addData} = DataSlice.actions